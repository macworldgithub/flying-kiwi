"use client";

import { useState } from "react";

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

      alert("✅ Payment processed successfully!");
      onClose();
    } catch (error: any) {
      alert("❌ " + (error.message || "Something went wrong"));
      setMessage("❌ " + (error.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-bold text-center mb-4">
          Process Payment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Customer Number
            </label>
            <input
              name="custNo"
              value={formData.custNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Amount
            </label>
            <input
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Payment ID
            </label>
            <input
              name="paymentId"
              value={formData.paymentId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Comment
            </label>
            <input
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold disabled:bg-blue-300"
          >
            {loading ? "Processing..." : "Submit Payment"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 text-blue-600 font-semibold border-t border-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};
