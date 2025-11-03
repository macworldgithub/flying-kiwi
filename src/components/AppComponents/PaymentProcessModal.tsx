"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heading } from "../UIComponents/Heading";
import { FormInput } from "../UIComponents/FormInput";
import { Button } from "../UIComponents/Button";

interface PaymentProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentProcessModal = ({
  isOpen,
  onClose,
}: PaymentProcessModalProps) => {
  const [formData, setFormData] = useState({
    custNo: "526691",
    amount: "",
    paymentId: "",
    email: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://bele.omnisuiteai.com/api/v1/payments/process",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Payment failed");

      setMessage("✅ Payment processed successfully!");
      setTimeout(onClose, 1000);
    } catch (error: any) {
      setMessage(
        "❌ Payment was not completed" +
          (error.message || "Something went wrong")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl"
      >
        <Heading
          title="Process Payment"
          subtitle="Enter your payment details to complete the transaction"
          align="center"
        />

        <form onSubmit={handleSubmit} className="space-y-5">
          <FormInput
            label="Customer Number"
            name="custNo"
            value={formData.custNo}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Payment ID"
            name="paymentId"
            value={formData.paymentId}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            size="lg"
            variant="gradient"
            isLoading={loading}
            disabled={loading}
          >
            {loading ? "Processing..." : "Submit Payment"}
          </Button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.startsWith("✅")
                ? "text-green-600"
                : message.startsWith("❌")
                ? "text-red-500"
                : "text-gray-600"
            }`}
          >
            {message}
          </p>
        )}

        <Button
          variant="outline"
          fullWidth
          size="md"
          className="mt-6 border-t border-gray-200"
          onClick={onClose}
        >
          Close
        </Button>
      </motion.div>
    </div>
  );
};
