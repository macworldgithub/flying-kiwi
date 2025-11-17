"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "../UIComponents/Link";
import { Button } from "../UIComponents/Button";
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
  { label: "About", href: "/about" },
  { label: "Contact", href: "/Contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { access_token } = useSelector((state: RootState) => state.login);

  useEffect(() => {
    setIsLoggedIn(!!access_token || !!localStorage.getItem("access_token"));
  }, [access_token]);

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(!!localStorage.getItem("access_token"));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleSwitchToEsim = () => router.push("/chat-window?fromBanner=true");
  const handleLogin = () => router.push("/login");
  const handleLogout = () => {
    localStorage.removeItem("persist:flywing-kiwi-root");
    localStorage.removeItem("access_token");
    dispatch(logout());
    setIsLoggedIn(false);
    router.push("/login");
  };

  const handleDeleteCustomer = () => {
    dispatch(DeleteCustomerApi())
      .unwrap()
      .then(() => {
        setShowDeleteModal(false);
        alert("Customer deleted successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert(err.message || "Failed to delete customer");
      });
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-3 md:py-4 md:px-10 flex-wrap md:flex-nowrap">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Flying Kiwi Logo"
              width={257}
              height={37}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-center flex-wrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              label={link.label}
              className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            />
          ))}

          <Button
            variant="destructive"
            size="md"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete Customer
          </Button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="gradient" size="md" onClick={handleSwitchToEsim}>
            Switch to E-sim
          </Button>

          {!isLoggedIn ? (
            <Button variant="gradient" size="md" onClick={handleLogin}>
              Login
            </Button>
          ) : (
            <Button variant="outline" size="md" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col space-y-3 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  className="block text-gray-700 transition-colors"
                />
              ))}

              <Button
                variant="gradient"
                size="md"
                className="w-full mt-2"
                onClick={handleSwitchToEsim}
              >
                Switch to E-sim
              </Button>

              <Button
                variant="destructive"
                size="md"
                className="w-full mt-2"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete Customer
              </Button>

              {!isLoggedIn ? (
                <Button
                  variant="gradient"
                  size="md"
                  className="w-full mt-2"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="md"
                  className="w-full mt-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <DeleteCustomerModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDeleteCustomer}
      />
    </header>
  );
};

export default Navbar;
