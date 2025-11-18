// "use client";

// import React, { useState } from "react";
// import { Mail, KeyRound, X } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { Button } from "../UIComponents/Button";
// import { FormInput } from "../UIComponents/FormInput";
// import { LoginApi } from "@/app/api/auth";
// import { AppDispatch, RootState } from "@/store/reduxStore";
// import { setEmail, setPin } from "@/reduxSlices/loginSlice";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// export const Login = () => {
//   const [showLogin, setShowLogin] = useState(true);
//   const dispatch = useDispatch<AppDispatch>();
//   const router = useRouter();

//   const { email, pin, loading } = useSelector(
//     (state: RootState) => state.login
//   );

//   const handleLogin = () => {
//     dispatch(LoginApi());
//     router.push("/");
//   };

//   const handleClose = () => {
//     router.push("/");
//     setShowLogin(false);
//   };

//   return (
//     <>
//       <AnimatePresence>
//         {showLogin && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             <div className="fixed inset-0 z-30 bg-linear-to-br from-[#13AFF0] to-[#EB0FB6] animate-gradient" />

//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center p-4"
//               initial={{ opacity: 0, scale: 0.92 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.92 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//             >
//               <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl shadow-black/20">
//                 <button
//                   className="absolute top-4 right-4 text-white/70 hover:text-white transition"
//                   onClick={handleClose}
//                 >
//                   <X size={22} />
//                 </button>

//                 <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow">
//                   Login
//                 </h2>

//                 <div className="space-y-4">
//                   <FormInput
//                     label="Email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => dispatch(setEmail(e.target.value))}
//                     icon={<Mail size={18} color="white" />}
//                   />

//                   <FormInput
//                     label="PIN"
//                     type="password"
//                     value={pin}
//                     onChange={(e) => dispatch(setPin(e.target.value))}
//                     icon={<KeyRound size={18} color="white" />}
//                   />
//                 </div>
//                 <div className="text-center mt-4">
//                   <button
//                     onClick={() => router.push("/ForgotPass")}
//                     className="text-sm text-white/80 hover:text-white underline transition"
//                   >
//                     Forgot Password
//                   </button>
//                 </div>

//                 <Button
//                   className="w-full mt-6"
//                   onClick={handleLogin}
//                   disabled={loading}
//                   variant="outline"
//                 >
//                   {loading ? "Logging in..." : "Login"}
//                 </Button>

//                 <Button
//                   className="w-full mt-3"
//                   onClick={handleClose}
//                   variant="outline"
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };
"use client";

import React, { useState } from "react";
import { Mail, KeyRound, X, AlertCircle } from "lucide-react";
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
  const [error, setError] = useState(""); // ← Naya error state

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { email, pin, loading } = useSelector(
    (state: RootState) => state.login
  );

  const handleLogin = async () => {
    setError(""); // Clear previous error

    if (!email || !pin) {
      setError("Please enter both email and PIN");
      return;
    }

    try {
      const result = await dispatch(LoginApi()).unwrap(); // ← .unwrap() se actual result/error milega

      // Success → redirect to home
      setShowLogin(false);
      router.push("/");
    } catch (err: any) {
      // Failed → show error message
      setError(err.message || "Invalid email or PIN. Please try again.");
    }
  };

  const handleClose = () => {
    setShowLogin(false);
    router.push("/");
  };

  return (
    <AnimatePresence>
      {showLogin && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Gradient Background */}
          <div className="fixed inset-0 z-30 bg-gradient-to-br from-[#13AFF0] to-[#EB0FB6] animate-gradient" />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold text-white text-center mb-6">
                   Login
              </h2>

              <div className="space-y-5">
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  icon={<Mail size={18} color="white" />}
                />

                <FormInput
                  label="PIN"
                  type="password"
                  placeholder="Enter your PIN"
                  value={pin}
                  onChange={(e) => dispatch(setPin(e.target.value))}
                  icon={<KeyRound size={18} color="white" />}
                  maxLength={6}
                />

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100"
                  >
                    <AlertCircle size={20} />
                    <p className="text-sm font-medium">{error}</p>
                  </motion.div>
                )}

                {/* Forgot PIN Link */}
                <div className="text-center">
                  <button
                    onClick={() => router.push("/ForgotPass")}
                    className="text-sm text-white/80 hover:text-white underline underline-offset-2 transition"
                  >
                    Forgot PIN?
                  </button>
                </div>

                {/* Buttons */}
                <Button
                  className="w-full text-lg py-6"
                  onClick={handleLogin}
                  disabled={loading || !email || !pin}
                  variant="outline"
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>

                <Button
                  className="w-full"
                  onClick={handleClose}
                  variant="ghost"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Login;
