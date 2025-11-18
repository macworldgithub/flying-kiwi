// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Link } from "../UIComponents/Link";
// import { Button } from "../UIComponents/Button";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/store/reduxStore";
// import { logout } from "@/reduxSlices/loginSlice";
// import DeleteCustomerModal from "../AppComponents/DeleteCustomerModal";
// import { DeleteCustomerApi } from "@/app/api/auth";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Program", href: "/Program" },
//   { label: "Switch to Support", href: "/support" },
//   { label: "About", href: "/About" },
//   { label: "Contact", href: "/Contact" },
// ];

// export const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const router = useRouter();
//   const dispatch = useDispatch<AppDispatch>();
//   const { access_token } = useSelector((state: RootState) => state.login);

//   useEffect(() => {
//     setIsLoggedIn(!!access_token || !!localStorage.getItem("access_token"));
//   }, [access_token]);

//   useEffect(() => {
//     const handleStorage = () => {
//       setIsLoggedIn(!!localStorage.getItem("access_token"));
//     };
//     window.addEventListener("storage", handleStorage);
//     return () => window.removeEventListener("storage", handleStorage);
//   }, []);

//   const handleSwitchToEsim = () => router.push("/chat-window?fromBanner=true");
//   const handleLogin = () => router.push("/login");
//   const handleLogout = () => {
//     localStorage.removeItem("persist:flywing-kiwi-root");
//     localStorage.removeItem("access_token");
//     dispatch(logout());
//     setIsLoggedIn(false);
//     router.push("/login");
//   };

//   const handleDeleteCustomer = () => {
//     dispatch(DeleteCustomerApi())
//       .unwrap()
//       .then(() => {
//         setShowDeleteModal(false);
//         alert("Customer deleted successfully!");
//       })
//       .catch((err) => {
//         console.error(err);
//         alert(err.message || "Failed to delete customer");
//       });
//   };

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
//       <div className="flex items-center justify-between px-6 py-3 md:py-4 md:px-10 flex-wrap md:flex-nowrap">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Link href="/">
//             <Image
//               src="/images/logo.png"
//               alt="Flying Kiwi Logo"
//               width={257}
//               height={37}
//               className="object-contain cursor-pointer"
//               priority
//             />
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-center flex-wrap">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               label={link.label}
//               className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
//             />
//           ))}

//           <Button
//             variant="destructive"
//             size="md"
//             onClick={() => setShowDeleteModal(true)}
//           >
//             Delete Customer
//           </Button>
//         </nav>

//         <div className="hidden md:flex items-center gap-4">
//           <Button variant="gradient" size="md" onClick={handleSwitchToEsim}>
//             Switch to E-sim
//           </Button>

//           {!isLoggedIn ? (
//             <Button variant="gradient" size="md" onClick={handleLogin}>
//               Login
//             </Button>
//           ) : (
//             <Button variant="outline" size="md" onClick={handleLogout}>
//               Logout
//             </Button>
//           )}
//         </div>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-gray-700 focus:outline-none ml-auto"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
//           >
//             <nav className="flex flex-col space-y-3 px-6 py-4">
//               {NAV_LINKS.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   label={link.label}
//                   className="block text-gray-700 transition-colors"
//                 />
//               ))}

//               <Button
//                 variant="gradient"
//                 size="md"
//                 className="w-full mt-2"
//                 onClick={handleSwitchToEsim}
//               >
//                 Switch to E-sim
//               </Button>

//               <Button
//                 variant="destructive"
//                 size="md"
//                 className="w-full mt-2"
//                 onClick={() => setShowDeleteModal(true)}
//               >
//                 Delete Customer
//               </Button>

//               {!isLoggedIn ? (
//                 <Button
//                   variant="gradient"
//                   size="md"
//                   className="w-full mt-2"
//                   onClick={handleLogin}
//                 >
//                   Login
//                 </Button>
//               ) : (
//                 <Button
//                   variant="outline"
//                   size="md"
//                   className="w-full mt-2"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </Button>
//               )}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <DeleteCustomerModal
//         isOpen={showDeleteModal}
//         onClose={() => setShowDeleteModal(false)}
//         onDelete={handleDeleteCustomer}
//       />
//     </header>
//   );
// };

// export default Navbar;
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Key, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "../UIComponents/Link";
import { Button } from "../UIComponents/Button";
import { FormInput } from "../UIComponents/FormInput";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/reduxStore";
import { logout } from "@/reduxSlices/loginSlice";
import DeleteCustomerModal from "../AppComponents/DeleteCustomerModal";
import { DeleteCustomerApi } from "@/app/api/auth";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Program", href: "/Program" },
  { label: "Switch to Support", href: "/support" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showChangePin, setShowChangePin] = useState(false);

  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { access_token } = useSelector((state: RootState) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = access_token || localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, [access_token]);

  const handleSwitchToEsim = () => router.push("/chat-window?fromBanner=true");
  const handleLogin = () => router.push("/login");

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    setIsLoggedIn(false);
    router.push("/login");
  };

  const handleChangePin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oldPin || !newPin || oldPin === newPin) {
      setStatus("error");
      setMessage("Old and new PIN must be different");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("https://bele.omnisuiteai.com/auth/change-pin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
          Authorization: `Bearer ${
            access_token || localStorage.getItem("access_token")
          }`,
        },
        body: JSON.stringify({ oldPin, newPin }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("PIN changed successfully!");
        setTimeout(() => {
          setShowChangePin(false);
          setOldPin("");
          setNewPin("");
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to change PIN");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCustomer = () => {
    dispatch(DeleteCustomerApi())
      .unwrap()
      .then(() => {
        setShowDeleteModal(false);
        alert("Customer deleted successfully!");
      })
      .catch((err) => {
        alert(err.message || "Failed to delete customer");
      });
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={257}
              height={37}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                label={link.label}
                className="text-gray-700 hover:text-blue-600 font-medium"
              />
            ))}

            {isLoggedIn && (
              <>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Delete Customer
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowChangePin(true)}
                  className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Change PIN
                </Button>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="gradient" onClick={handleSwitchToEsim}>
              Switch to E-sim
            </Button>
            {!isLoggedIn ? (
              <Button variant="gradient" onClick={handleLogin}>
                Login
              </Button>
            ) : (
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-6 py-6 space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    className="block text-lg"
                  />
                ))}

                {isLoggedIn && (
                  <>
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={() => {
                        setShowDeleteModal(true);
                        setIsOpen(false);
                      }}
                    >
                      Delete Customer
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => {
                        setShowChangePin(true);
                        setIsOpen(false);
                      }}
                    >
                      <Key size={18} /> Change PIN
                    </Button>
                  </>
                )}

                <Button
                  variant="gradient"
                  className="w-full"
                  onClick={handleSwitchToEsim}
                >
                  Switch to E-sim
                </Button>
                {!isLoggedIn ? (
                  <Button
                    variant="gradient"
                    className="w-full"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Change PIN Modal - Fixed z-index */}
      <AnimatePresence>
        {showChangePin && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !loading && setShowChangePin(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-200"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800">
                  <Key className="text-blue-600" size={28} />
                  Change PIN
                </h2>
                <button
                  onClick={() => setShowChangePin(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={28} />
                </button>
              </div>

              <form onSubmit={handleChangePin} className="space-y-6">
                <FormInput
                  label="Current PIN"
                  type="password"
                  value={oldPin}
                  onChange={(e) => setOldPin(e.target.value)}
                  placeholder="••••"
                  maxLength={6}
                  required
                />
                <FormInput
                  label="New PIN"
                  type="password"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="••••"
                  maxLength={6}
                  required
                />

                {status !== "idle" && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg border ${
                      status === "success"
                        ? "bg-green-50 border-green-300 text-green-800"
                        : "bg-red-50 border-red-300 text-red-800"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle size={22} />
                    ) : (
                      <AlertCircle size={22} />
                    )}
                    <p className="font-medium">{message}</p>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 text-lg"
                    disabled={
                      loading || !oldPin || !newPin || oldPin === newPin
                    }
                  >
                    {loading ? "Changing..." : "Change PIN"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowChangePin(false)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Customer Modal - Ab Middle Mein Aayega */}
      <DeleteCustomerModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDeleteCustomer}
      />
    </>
  );
};

export default Navbar;
