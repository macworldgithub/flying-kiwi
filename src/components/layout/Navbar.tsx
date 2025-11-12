"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "../UIComponents/Link";
import { Button } from "../UIComponents/Button";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Program", href: "/Program" },
  { label: "Switch to Support", href: "/support" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSwitchToEsim = () => {
    router.push("/chat-window?fromBanner=true");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-[40px] py-3 md:py-4">
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

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              label={link.label}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="gradient" size="md" onClick={handleSwitchToEsim}>
            Switch to E-sim
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
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
            <nav className="flex flex-col space-y-3 px-[40px] py-4">
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
                onClick={() => setIsOpen(false)}
              >
                Switch to E-sim
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
