"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Key,
  CheckCircle,
  AlertCircle,
  Wifi,
  Phone,
  Loader2,
} from "lucide-react";
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
  { label: "Support", href: "/support" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

export const Navbar: React.Fc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showChangePin, setShowChangePin] = useState(false);
  const [showUsageModal, setShowUsageModal] = useState(false); // ← NEW: Usage Modal
  const [usageLoading, setUsageLoading] = useState(false);
  const [usageError, setUsageError] = useState("");
  const [usageData, setUsageData] = useState<any>(null);

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

  const token = access_token || localStorage.getItem("access_token");
  const custNo = localStorage.getItem("custNo") || "528031";

  // Check Usage API Function
  const checkUsage = async () => {
    if (!token) {
      setUsageError("Please login first.");
      return;
    }

    setUsageLoading(true);
    setUsageError("");
    setUsageData(null);

    try {
      // 1. Get Customer Services
      const serviceRes = await fetch(
        `https://bele.omnisuiteai.com/api/v1/customers/${custNo}/services`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const serviceData = await serviceRes.json();

      if (
        !serviceRes.ok ||
        serviceData.status !== "success" ||
        !serviceData.data?.services?.serviceDetails?.length
      ) {
        setUsageError(
          "You don't have an active plan yet. Please choose a plan first!"
        );
        setUsageLoading(false);
        return;
      }

      const service = serviceData.data.services.serviceDetails[0];

      // 2. Parallel APIs
      const [allowanceRes, unbilledRes] = await Promise.all([
        fetch(
          `https://bele.omnisuiteai.com/api/v1/customers/${custNo}/balance/mobile?lineSeqNo=${service.lineSeqNo}`,
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          `https://bele.omnisuiteai.com/api/v1/customers/${custNo}/unbilled-summary`,
          { headers: { Authorization: `Bearer ${token}` } }
        ),
      ]);

      const allowanceData = await allowanceRes.json();
      const unbilledData = await unbilledRes.json();

      setUsageData({
        service,
        allowances: allowanceData.data?.queryItems || [],
        unbilled: unbilledData.data?.unbilledCallsSummary?.calls[0] || null,
      });
    } catch (err) {
      setUsageError("Failed to load usage. Please try again.");
    } finally {
      setUsageLoading(false);
    }
  };

  const handleCheckUsage = () => {
    setShowUsageModal(true);
    checkUsage();
  };

  const handleSwitchToEsim = () => router.push("/chat-window?fromBanner=true");
  const handleLogin = () => router.push("/login");

  const formatBytes = (bytes: number) => {
    if (!bytes) return "0 GB";
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  };

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
      {/* Navbar Code Same */}
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
                  variant="primary"
                  size="sm"
                  onClick={() => setShowChangePin(true)}
                  className="flex items-center gap-2"
                >
                  Change PIN
                </Button>
                <Button variant="primary" size="sm" onClick={handleCheckUsage}>
                  Check Usage
                </Button>
              </>
            )}
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="gradient"
              onClick={() => router.push("/chat-window?fromBanner=true")}
            >
              Switch to E-sim
            </Button>
            {!isLoggedIn ? (
              <Button variant="gradient" onClick={() => router.push("/login")}>
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-gray-200 shadow-2xl"
              onClick={() => setIsOpen(false)}
            >
              <div className="px-6 py-8 space-y-6">
                {/* 1. Main Navigation Links - Pehle aayenge */}
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    className="block text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors py-2"
                  />
                ))}

                {/* 2. Divider */}
                <div className="border-t border-gray-200" />

                {/* 3. Logged-in Actions */}
                {isLoggedIn && (
                  <>
                    <Button
                      variant="destructive"
                      className="w-full text-lg py-6"
                      onClick={() => {
                        setShowDeleteModal(true);
                        setIsOpen(false);
                      }}
                    >
                      Delete Customer
                    </Button>

                    <Button
                      variant="primary"
                      className="w-full text-lg py-6 flex items-center justify-center gap-3"
                      onClick={() => {
                        setShowChangePin(true);
                        setIsOpen(false);
                      }}
                    >
                      Change PIN
                    </Button>

                    <Button
                      variant="primary"
                      className="w-full text-lg py-6 flex items-center justify-center gap-3"
                      onClick={() => {
                        handleCheckUsage();
                        setIsOpen(false);
                      }}
                    >
                      Check Usage
                    </Button>
                  </>
                )}

                {/* 4. Main Action Buttons */}
                <div className="space-y-4">
                  <Button
                    variant="gradient"
                    className="w-full text-lg py-6 font-semibold"
                    onClick={() => {
                      handleSwitchToEsim();
                      setIsOpen(false);
                    }}
                  >
                    Switch to E-sim
                  </Button>

                  {!isLoggedIn ? (
                    <Button
                      variant="gradient"
                      className="w-full text-lg py-6 font-semibold"
                      onClick={() => {
                        handleLogin();
                        setIsOpen(false);
                      }}
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full text-lg py-6 font-semibold border-2"
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Check Usage Modal */}
      <AnimatePresence>
        {showUsageModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowUsageModal(false)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl md:text-3xl font-bold flex items-center gap-3">
                  <Wifi className="text-indigo-600" /> My Usage
                </h2>
                <button
                  onClick={() => setShowUsageModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={28} />
                </button>
              </div>

              {usageLoading && (
                <div className="text-center py-12">
                  <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mx-auto mb-4" />
                  <p>Loading your usage...</p>
                </div>
              )}

              {usageError && !usageData && (
                <div className="text-center py-12 bg-red-50 rounded-2xl border border-red-200">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-red-800">
                    {usageError}
                  </p>
                  {usageError.includes("plan") && (
                    <Button
                      variant="gradient"
                      className="mt-6"
                      onClick={() =>
                        router.push("/chat-window?fromBanner=true")
                      }
                    >
                      Choose a Plan Now
                    </Button>
                  )}
                </div>
              )}

              {usageData && (
                <div className="space-y-6">
                  {/* Service Info */}
                  <div className="from-indigo-50 to-blue-50 rounded-2xl p-6 border">
                    <div className="flex items-center gap-4 mb-4">
                      <Phone className="text-indigo-600" />
                      <div>
                        <h3 className="text-sm md:text-lg font-bold">
                          {usageData.service.planName}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {usageData.service.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-md font-semibold ml-6">
                      {usageData.service.csn}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                      <Wifi className="text-green-600" size={28} />
                      Data Usage
                    </h3>

                    {usageData.allowances
                      .filter((a: any) => {
                        const desc = (a.accountDesc || "").toLowerCase();
                        return (
                          a.unitCode === "Data" &&
                          a.creditValue > 0 &&
                          desc.includes("plan") &&
                          !desc.includes("databank") &&
                          !desc.includes("auto block") &&
                          !desc.includes("excess") &&
                          !desc.includes("bolt-on")
                        );
                      })
                      .map((item: any, i: number) => {
                        const match = item.accountDesc.match(/(\d+)GB/);
                        const totalGB = match ? parseFloat(match[1]) : 0;
                        const remainingGB = parseFloat(
                          formatBytes(item.creditValue).replace(" GB", "")
                        );
                        const usedGB = totalGB - remainingGB;

                        return (
                          <div
                            key={i}
                            className=" from-emerald-50 via-green-50 to-emerald-50 rounded-3xl p-6 border-2 border-green-200 shadow-lg mb-6"
                          >
                            <div className="mb-4">
                              <p className="text-sm md:text-lg font-bold text-gray-800">
                                {item.accountDesc
                                  .replace("post-paid plan", "")
                                  .trim()}
                              </p>
                            </div>

                            {/* Remaining / Total */}
                            <div className="flex justify-between items-baseline mb-3">
                              <span className="text-md md:text-2xl font-extrabold text-green-700">
                                {remainingGB.toFixed(2)} GB
                              </span>
                              <span className="text-sm md:text-xl text-gray-600">
                                / {totalGB.toFixed(2)} GB
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-4 shadow-inner">
                              <div
                                className="h-full from-green-600 to-emerald-600 transition-all duration-1000 ease-out"
                                style={{
                                  width: `${(remainingGB / totalGB) * 100}%`,
                                }}
                              >
                                <div className="h-full w-full bg-white opacity-30 animate-pulse"></div>
                              </div>
                            </div>

                            {/* Used Data */}
                            <div className="flex justify-between text-xs md:text-sm">
                              <span className="text-gray-600">
                                Used:{" "}
                                <strong className="text-red-600">
                                  {usedGB.toFixed(2)} GB
                                </strong>
                              </span>
                              <span className="text-gray-600">
                                Expires:{" "}
                                <strong className="text-gray-800">
                                  {item.expDate
                                    ? new Date(item.expDate).toLocaleDateString(
                                        "en-AU"
                                      )
                                    : "Never"}
                                </strong>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    {usageData.allowances.filter((a: any) => {
                      const desc = (a.accountDesc || "").toLowerCase();
                      return (
                        a.unitCode === "Data" &&
                        a.creditValue > 0 &&
                        desc.includes("plan") &&
                        !desc.includes("databank") &&
                        !desc.includes("auto block")
                      );
                    }).length === 0 && (
                      <div className="text-center py-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-300">
                        <Wifi className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className=" text-md md:text-xl text-gray-600 font-medium">
                          No active data plan found
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Unbilled */}
                  {usageData.unbilled && (
                    <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200 text-center">
                      <p className="text-gray-600 mb-2 text-md md:text-xl">
                        Current Unbilled Amount
                      </p>
                      <p className="text-md md:text-2xl font-bold text-orange-600">
                        ${parseFloat(usageData.unbilled.totalCharge).toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showChangePin && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
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

      {/* Delete Customer Modal */}
      <DeleteCustomerModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDeleteCustomer}
      />
    </>
  );
};

export default Navbar;
