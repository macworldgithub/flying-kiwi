"use client";
import React, { useState } from "react";

const ChatWindow = () => {
  const [chat, setChat] = useState<
    { id: number; type: "user" | "bot"; text: string; time: string }[]
  >([
    {
      id: 1,
      type: "bot",
      text: "Hi there, I would be glad to help. How can I help?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMsg = {
      id: chat.length + 1,
      type: "user" as const,
      text: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const payload = sessionId
        ? { query: userMsg.text, session_id: sessionId }
        : { query: userMsg.text };

      const response = await fetch("/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (!sessionId && data.session_id) setSessionId(data.session_id);

      const botMsg = {
        id: chat.length + 2,
        type: "bot" as const,
        text:
          data?.message ||
          data?.response ||
          "Sorry, I couldn’t understand that.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setChat((prev) => [...prev, botMsg]);
    } catch (error: any) {
      console.error("Chat error:", error);
      const errorMsg =
        error.message.includes("Failed to fetch")
          ? "Network error — please check your connection."
          : "Oops! Something went wrong. Please try again.";
      setChat((prev) => [
        ...prev,
        {
          id: chat.length + 2,
          type: "bot",
          text: errorMsg,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-60"
          style={{ backgroundImage: "url('/images/banner.png')" }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0E3B5C]/80 via-[#05263D]/90 to-[#000000]/85 backdrop-blur-md" />
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto w-full max-w-3xl h-[650px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-linear-to-r from-[#A9D7F1] via-[#F9F4F8] to-[#F8CFF3] shadow-md">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-10 w-auto drop-shadow-md"
              />
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 flex flex-col bg-linear-to-b from-[#A9D7F1]/30 via-[#F9F4F8]/40 to-[#F8CFF3]/30 p-6 overflow-y-auto scroll-smooth">
            <div className="text-center mb-6 mt-4">
              <h2 className="text-[#0E3B5C] font-semibold text-lg mb-1 drop-shadow-sm">
                How can I help you today?
              </h2>
            </div>

            {chat.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 mb-5 ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 bg-linear-to-br from-[#F8CFF3] to-[#A9D7F1] rounded-full flex items-center justify-center overflow-hidden shadow-md">
                    <img
                      src="/images/bot.png"
                      alt="Bot Avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                )}

                <div
                  className={`rounded-2xl px-5 py-3 shadow ${
                    msg.type === "user"
                      ? "bg-white text-[#0E3B5C]"
                      : "bg-[#F9F4F8]/90 text-[#0E3B5C]"
                  } max-w-[70%]`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 bg-linear-to-br from-[#F8CFF3] to-[#A9D7F1] rounded-full flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src="/images/bot.png"
                    alt="Loading Avatar"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="bg-[#F9F4F8]/90 rounded-2xl px-5 py-3 shadow max-w-[70%]">
                  <p className="text-[#0E3B5C] text-sm leading-relaxed">
                    Typing...
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-white/20 backdrop-blur-lg border-t border-white/20">
            <div className="flex items-center gap-3 rounded-full px-4 py-3 bg-white/40">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-[#0E3B5C] placeholder-[#0E3B5C]/50 text-sm focus:outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-r from-[#A9D7F1] via-[#F9F4F8] to-[#F8CFF3] shadow hover:scale-105 transition disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0E3B5C"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
