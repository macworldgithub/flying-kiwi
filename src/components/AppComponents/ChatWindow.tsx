"use client";
import React, { useState, useEffect } from "react";
import { PaymentCard } from "./PaymentCard";
import { useRouter, useSearchParams } from "next/navigation";

interface Plan {
  _id: string;
  planNo: number;
  planName: string;
  price: number;
  network: string;
  isActive: boolean;
}
const ChatWindow = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [chat, setChat] = useState<
    { id: number; type: "user" | "bot"; text: string; time: string }[]
  >([]);

  const [plans, setPlans] = useState<Plan[]>([]);
  const [showPlans, setShowPlans] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedSim, setSelectedSim] = useState<string | null>(null);
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [custNo, setCustNo] = useState<string | null>(null);

  const [showNumberButtons, setShowNumberButtons] = useState(false);
  const [numberOptions, setNumberOptions] = useState<string[]>([]);

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fromBanner = searchParams.get("fromBanner");
    if (fromBanner) {
      setChat([
        {
          id: 1,
          type: "bot",
          text: "Let me help you switch to an E-sim. Please fill the form below.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setShowDetailsForm(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const res = await fetch("https://bele.omnisuiteai.com/api/v1/plans");
        const data = await res.json();
        const list: Plan[] = data.data || [];
        setPlans(list);

        // Preselect plan from URL
        const planParam = searchParams.get("plan");
        if (planParam) {
          const match = list.find((p) => p.planName === planParam);
          if (match) {
            setSelectedPlan(match);
            setShowDetailsForm(true);
          }
        }
      } catch (e) {
        console.error("Failed loading plans:", e);
      }
    };

    loadPlans();
  }, [searchParams]);

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    pin: "",
  });
  const [formErrors, setFormErrors] = useState<any>({});

  const validateForm = () => {
    const errors: any = {};
    let ok = true;

    const requiredFields: (keyof typeof formData)[] = [
      "firstName",
      "surname",
      "email",
      "phone",
      "dob",
      "address",
      "suburb",
      "state",
      "postcode",
      "pin",
    ];

    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        errors[field] = "Required";
        ok = false;
      }
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email";
      ok = false;
    }
    if (formData.phone && !/^04\d{8}$/.test(formData.phone)) {
      errors.phone = "Invalid AU mobile";
      ok = false;
    }
    if (formData.postcode && !/^\d{4}$/.test(formData.postcode)) {
      errors.postcode = "Postcode must be 4 digits";
      ok = false;
    }

    if (formData.pin && !/^\d{4}$/.test(formData.pin)) {
      errors.pin = "PIN must be 4 digits";
      ok = false;
    }

    setFormErrors(errors);
    return ok;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof typeof formData;
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev: any) => ({ ...prev, [name]: "" }));
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    setUserEmail(formData.email);
    localStorage.setItem("userEmail", formData.email);

    const formatted = Object.entries(formData)
      .map(([k, v]) => `${k}: ${v}`)
      .join(", ");

    setShowDetailsForm(false);
    handleSend(formatted);
  };

  const callAPI = async (text: string) => {
    const payload = sessionId
      ? { query: text, session_id: sessionId, brand: "flying-kiwi" }
      : { query: text, brand: "flying-kiwi" };

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) return null;
      const data = await res.json();

      if (!sessionId && data.session_id) setSessionId(data.session_id);
      if (data.custNo) setCustNo(data.custNo);

      return data;
    } catch (e) {
      console.error("API error:", e);
      return null;
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg = {
      id: chat.length + 1,
      type: "user" as const,
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    const data = await callAPI(text);
    setLoading(false);

    if (!data) {
      return setChat((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: "bot",
          text: "Oops! Something went wrong.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }

    const botText = data.message || data.response || "";

    if (
      botText.toLowerCase().includes("first name") ||
      botText.toLowerCase().includes("surname")
    ) {
      setShowDetailsForm(true);
    }

    const matches = botText.match(/04\d{8}/g);
    if (matches?.length === 5) {
      setNumberOptions(matches);
      setShowNumberButtons(true);
      return;
    }
    setChat((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type: "bot",
        text: botText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  const handleNumberSelect = async (num: string) => {
    setSelectedSim(num);
    setShowNumberButtons(false);

    setChat((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type: "user",
        text: `You selected this number: ${num}`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    await callAPI(num);

    setChat((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type: "bot",
        text: selectedPlan
          ? "Perfect! Let's continue with payment."
          : "Choose one of the plans below:",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    if (selectedPlan) setShowPayment(true);
    else setShowPlans(true);
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    localStorage.setItem("planPrice", String(plan.price));

    setShowPlans(false);

    setChat((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type: "user",
        text: `You selected this plan: ${plan.planName}`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    callAPI(`User selected plan ${plan.planName}`);
    setShowPayment(true);
  };

  const handleActivateOrder = async () => {
    try {
      const body = {
        number: selectedSim,
        cust: {
          custNo,
          suburb: formData.suburb,
          postcode: formData.postcode,
          address: formData.address,
          email: formData.email,
        },
        planNo: String(selectedPlan?.planNo),
        simNo: "",
      };

      await fetch("https://bele.omnisuiteai.com/api/v1/orders/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      alert("Your order has been successfully activated.");
    } catch {
      handleSend("Activation failed. Please try again.");
    }
  };

  const sendMessage = () => {
    handleSend(message);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#05263D] overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-60"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      />
      <div className="absolute inset-0 bg-linear-to-br from-[#0E3B5C]/80 via-[#05263D]/90 to-[#000000]/85 backdrop-blur-md" />

      {/* Chat window container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto  bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}

        <div className="flex justify-between items-center p-3 sm:p-4 bg-linear-to-r from-[#A9D7F1] via-[#F9F4F8] to-[#F8CFF3] shadow-md">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="hidden sm:block h-8 sm:h-10 w-auto drop-shadow-md"
            />
          </div>
          <button
            onClick={() => router.push("/")}
            className="text-lg sm:text-xl font-bold hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Chat body */}
        <div className="flex flex-col bg-linear-to-b from-[#A9D7F1]/30 via-[#F9F4F8]/40 to-[#F8CFF3]/30 px-3 sm:px-6 py-4 sm:py-6 overflow-y-auto scroll-smooth">
          <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-4">
            <h2 className="text-[#ffffff] font-semibold text-base sm:text-lg mb-1 drop-shadow-sm">
              How can I help you today?
            </h2>
          </div>

          {selectedPlan && (
            <div className="mb-4 bg-white/20 border border-white/30 text-white text-center text-sm sm:text-base px-3 py-2 rounded-md shadow-md">
              You selected <strong>{selectedPlan.planName}</strong> — $
              {selectedPlan.price}. Let’s continue with your setup.
            </div>
          )}

          {chat.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6 ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.type === "bot" && (
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/bot.png"
                    alt="Bot Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              )}

              <div
                className={`${
                  msg.type === "user"
                    ? "bg-white text-[#0E3B5C]"
                    : "bg-white text-[#0E3B5C]"
                } rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 shadow-md max-w-[90%] sm:max-w-[80%] md:max-w-[70%]`}
              >
                <p className="text-xs sm:text-xs md:text-sm leading-relaxed break-words">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/bot.png"
                  alt="Loading Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 shadow-md max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                <p className="text-[#0E3B5C] text-xs sm:text-xs md:text-sm leading-relaxed">
                  Typing...
                </p>
              </div>
            </div>
          )}
          {/* Input Bar */}
          <div className="mt-auto">
            {showDetailsForm ? (
              <form
                onSubmit={handleFormSubmit}
                className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/30 overflow-y-auto max-h-[40vh] sm:max-h-[50vh]"
              >
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                  <div>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      placeholder="First Name"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.firstName && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="surname"
                      value={formData.surname}
                      onChange={handleFormChange}
                      placeholder="Surname"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.surname && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.surname}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Email"
                      type="email"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.email && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="Phone (e.g., 0412345678)"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.phone && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleFormChange}
                      placeholder="Date of Birth"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.dob && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.dob}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleFormChange}
                      placeholder="Address"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.address && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.address}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleFormChange}
                      placeholder="Suburb"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.suburb && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.suburb}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="state"
                      value={formData.state}
                      onChange={handleFormChange}
                      placeholder="State (e.g., VIC)"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.state && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.state}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleFormChange}
                      placeholder="Postcode (4 digits)"
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.postcode && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.postcode}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="pin"
                      value={formData.pin}
                      onChange={handleFormChange}
                      placeholder="4-digit PIN"
                      maxLength={4}
                      className="w-full p-1.5 sm:p-2 rounded bg-transparent text-white border border-white/50 text-xs sm:text-sm"
                      required
                    />
                    {formErrors.pin && (
                      <p className="text-red-300 text-xs mt-0.5 sm:mt-1">
                        {formErrors.pin}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-3 sm:mt-4 w-full bg-linear-to-r from-blue-600 to-teal-500 text-white py-1.5 sm:py-2 rounded hover:opacity-90 text-xs sm:text-sm"
                >
                  Submit Details
                </button>
              </form>
            ) : showNumberButtons && numberOptions.length > 0 ? (
              <div className="flex flex-wrap gap-1 sm:gap-2 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 justify-center">
                {numberOptions.map((num, index) => (
                  <button
                    key={index}
                    onClick={() => handleNumberSelect(num)}
                    disabled={loading}
                    className="bg-linear-to-r from-blue-600 to-teal-500 text-white px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded hover:opacity-90 text-xs sm:text-xs md:text-sm"
                  >
                    {num}
                  </button>
                ))}
              </div>
            ) : showPlans && !selectedPlan && plans.length > 0 ? (
              <div className="flex flex-wrap gap-1 sm:gap-2 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 justify-center">
                {plans.map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => handlePlanSelect(plan)}
                    className="bg-linear-to-r from-blue-600 to-teal-500 text-white px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded hover:opacity-90 text-xs sm:text-xs md:text-sm"
                  >
                    {plan.planName} - ${plan.price}
                  </button>
                ))}
              </div>
            ) : showPayment && selectedPlan ? (
              <PaymentCard
                custNo={custNo || ""}
                planName={selectedPlan.planName}
                planPrice={selectedPlan.price}
                onPaymentComplete={(success, msg) => {
                  setShowPayment(false);
                  setChat((prev) => [
                    ...prev,
                    {
                      id: prev.length + 1,
                      type: "bot",
                      text: msg,
                      time: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      }),
                    },
                  ]);
                  if (success) handleActivateOrder();
                }}
              />
            ) : (
              <div className="flex items-center gap-2 sm:gap-3 border border-white/30 rounded-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-white">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Message..."
                  className="flex-1 bg-transparent text-white placeholder-white/70 text-xs sm:text-sm focus:outline-none"
                />

                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-linear-to-r from-blue-600 to-teal-500 text-white hover:opacity-90 disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
