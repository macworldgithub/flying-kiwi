"use client";

import React, { useState } from "react";
import { Mail, KeyRound, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../UIComponents/Button";
import { FormInput } from "../UIComponents/FormInput";
import { LoginApi } from "@/app/api/auth";
import { AppDispatch, RootState } from "@/store/reduxStore";
import { setEmail, setPin } from "@/reduxSlices/loginSlice";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { email, pin, loading } = useSelector(
    (state: RootState) => state.login
  );

  const handleLogin = () => {
    dispatch(LoginApi());
  };

  const handleClose = () => {
    router.push("/");
    setShowLogin(false);
  };

  return (
    <>
      <AnimatePresence>
        {showLogin && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <div className="fixed inset-0 z-30 bg-linear-to-br from-[#13AFF0] to-[#EB0FB6] animate-gradient" />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl shadow-black/20">
                <button
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition"
                  onClick={handleClose}
                >
                  <X size={22} />
                </button>

                <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow">
                  Login
                </h2>

                <div className="space-y-4">
                  <FormInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    icon={<Mail size={18} color="white" />}
                  />

                  <FormInput
                    label="PIN"
                    type="password"
                    value={pin}
                    onChange={(e) => dispatch(setPin(e.target.value))}
                    icon={<KeyRound size={18} color="white" />}
                  />
                </div>

                <Button
                  className="w-full mt-6"
                  onClick={handleLogin}
                  disabled={loading}
                  variant="outline"
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>

                <Button
                  className="w-full mt-3"
                  onClick={handleClose}
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
