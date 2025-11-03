"use client";

import { useState, useEffect } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTokenReceived?: (token: string) => void;
}

export const PaymentModal = ({
  isOpen,
  onClose,
  onTokenReceived,
}: PaymentModalProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadQuickstream();
    }
  }, [isOpen]);

  const loadQuickstream = () => {
    if (typeof window === "undefined") return;

    const existingScript = document.getElementById("quickstream-js");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://api.quickstream.westpac.com.au/rest/v1/quickstream-api-1.0.min.js";
      script.id = "quickstream-js";
      script.async = true;
      script.onload = initQuickstream;
      document.body.appendChild(script);
    } else {
      initQuickstream();
    }
  };

  const initQuickstream = () => {
    if (!window.QuickstreamAPI) return;

    const container = document.getElementById("creditCardContainer");
    if (container) container.innerHTML = "";

    window.QuickstreamAPI.init({
      publishableApiKey:
        "TIAB_PUB_sawvcp2cgmdfiyehcysqpe6qh6ajk4pbhgasz3t9tetu7t3r9p767ygsmmxm",
    });

    let trustedFrame: any = null;
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
    const form = document.getElementById("payment-form") as HTMLFormElement;

    window.QuickstreamAPI.creditCards.createTrustedFrame(
      {
        config: { supplierBusinessCode: "TIABREST" },
        iframe: {
          width: "100%",
          height: "420px",
          scrolling: "no",
          style: { border: "none", background: "#fff", borderRadius: "12px" },
        },
        fieldStyles: {
          base: {
            fontSize: "18px",
            padding: "10px 12px",
            color: "#111",
            fontFamily: "Inter, sans-serif",
            "::placeholder": { color: "#9ca3af" },
          },
          focus: { color: "#000", borderColor: "#007BFF" },
          invalid: { color: "#EF4444", borderColor: "#EF4444" },
        },
      },
      function (errors, data) {
        console.log("Errors:", errors);
        if (errors) {
          console.error("Frame init error:", errors);
          alert("Failed to load credit card form");
          return;
        }
        trustedFrame = data.trustedFrame;
        submitBtn.disabled = false;
      }
    );

    form.onsubmit = (e) => {
      e.preventDefault();
      if (!trustedFrame) {
        alert("Frame not ready yet");
        return;
      }

      setLoading(true);
      submitBtn.disabled = true;
      submitBtn.textContent = "Processing...";

      trustedFrame.submitForm(function (errors: any, data: any) {
        setLoading(false);
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";

        if (errors) {
          const msg = Array.isArray(errors)
            ? errors.map((e) => e.message || e).join(", ")
            : errors.message || "Unknown error";
          alert("Error: " + msg);
          return;
        }

        const token = data?.singleUseToken?.singleUseTokenId;
        alert("Token created: " + token);
        if (onTokenReceived) onTokenReceived(token);
        onClose();
      });
    };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-white w-full sm:max-w-lg rounded-t-2xl shadow-xl p-6 animate-slide-up">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Add Payment Method
          </h2>
          <p className="text-gray-500 text-sm">
            Securely add your card details below
          </p>
        </div>

        <form id="payment-form">
          <div
            data-quickstream-api="creditCardContainer"
            id="creditCardContainer"
            className="w-full h-[420px]"
          />
          <button
            id="submitBtn"
            type="submit"
            disabled
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold disabled:bg-blue-300"
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>

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
