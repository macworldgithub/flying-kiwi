"use client";
import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  external,
  className,
}) => {
  return (
    <NextLink
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative inline-flex flex-col items-start text-black font-semibold transition-colors duration-300",
        className
      )}
    >
      <span className="">{label}</span>

      <div
        className="absolute bottom-[-6px] left-0 h-[4px] w-0 opacity-0 overflow-hidden 
                   transition-all duration-500 ease-out 
                   group-hover:w-full group-hover:opacity-100"
      >
        <img
          src="/images/link-hover.png"
          alt="hover line"
          className="h-full w-full object-cover"
        />
      </div>
    </NextLink>
  );
};
