"use client";

import { useState } from "react";
import { PaymentProcessModal } from "./PaymentProcessModal";

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

      alert("✅ Payment method added successfully!");
      setOpenPaymentModal(true);
    } catch (error: any) {
      setMessage("❌ " + (error.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-center mb-4">
            Add Payment Method
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-gray-600">
              Enter Token
            </label>
            <input
              type="text"
              value={inputToken}
              onChange={(e) => setInputToken(e.target.value)}
              placeholder="Enter single-use token"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading || !inputToken}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold disabled:bg-blue-300"
            >
              {loading ? "Submitting..." : "Submit Token"}
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
