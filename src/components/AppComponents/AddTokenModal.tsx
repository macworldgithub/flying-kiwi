"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaymentProcessModal } from "./PaymentProcessModal";
import { Heading } from "../UIComponents/Heading";
import { FormInput } from "../UIComponents/FormInput";
import { Button } from "../UIComponents/Button";

interface AddTokenModalProps {
  isOpen: boolean;
  token?: string;
  onClose: () => void;
}

export const AddTokenModal = ({
  isOpen,
  token = "",
  onClose,
}: AddTokenModalProps) => {
  const [inputToken, setInputToken] = useState(token);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://bele.omnisuiteai.com/api/v1/payments/methods",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            custNo: "526691",
            paymentTokenId: inputToken,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to add payment method");

      setMessage("✅ Payment method added successfully!");
      setOpenPaymentModal(true);
    } catch (error: any) {
      setMessage(
        "❌ Card not added" + (error.message || "Something went wrong")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl"
        >
          <Heading
            title="Add Payment Method"
            level={4}
            subtitle="Enter your payment token below to add your card."
            align="center"
          />

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Enter Token"
              value={inputToken}
              onChange={(e) => setInputToken(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="gradient"
              size="lg"
              isLoading={loading}
              disabled={!inputToken || loading}
            >
              {loading ? "Submitting..." : "Submit Token"}
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

      <PaymentProcessModal
        isOpen={openPaymentModal}
        onClose={() => {
          setOpenPaymentModal(false);
          onClose();
        }}
      />
    </>
  );
};
