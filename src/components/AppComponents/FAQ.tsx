"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I Keep My Current Phone Number?",
      a: "Yes! You can easily port your existing number to Flying Kiwi Service. The process is simple and we’ll guide you through each step.",
    },
    {
      q: "What Is An ESIM?",
      a: "An eSIM is a digital SIM that allows you to activate a mobile plan without needing a physical SIM card.",
    },
    {
      q: "How Much Of My Payment Goes To The Charity?",
      a: "A portion of every payment goes directly to verified charities. You can view impact reports in your account dashboard.",
    },
    {
      q: "What Network Does The Service Use?",
      a: "We partner with major national carriers to ensure high-quality 4G and 5G coverage across Australia.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left FAQ Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-xl border ${
                  open === idx
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 bg-gray-50"
                } overflow-hidden transition-all`}
              >
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                >
                  {item.q}
                  <span className="text-xl text-gray-500">
                    {open === idx ? "−" : "+"}
                  </span>
                </button>

                {open === idx && (
                  <div className="px-6 pb-4 text-gray-600 text-sm">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="/images/faq.png"
            alt="People working out"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
