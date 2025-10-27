"use client";
import React from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  external?: boolean;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  icon = <ArrowUpRight size={14} />,
  external,
  className,
}) => (
  <NextLink
    href={href}
    target={external ? "_blank" : "_self"}
    rel={external ? "noopener noreferrer" : undefined}
    className={cn("group relative inline-flex items-center gap-1", className)}
  >
    <span className="text-blue-600 text-sm font-medium">{label}</span>
    {icon && <motion.span whileHover={{ x: 2 }}>{icon}</motion.span>}
    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
  </NextLink>
);
