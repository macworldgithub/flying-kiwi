import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDob = (value: string) => {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
};

export const isDeleteIntent = (text: string) => {
  const t = text.toLowerCase();
  return (
    t.includes("delete my account") ||
    t.includes("close my account") ||
    t.includes("delete account") ||
    t.includes("close account")
  );
};