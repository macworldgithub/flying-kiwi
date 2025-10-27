import "./globals.css";
import { poppins } from "@/lib/fonts";

export const metadata = {
  title: "My App",
  description: "Next.js with Poppins font",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
