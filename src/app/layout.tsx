import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FloatingChatButton } from "@/components/UIComponents/FloatingChatButton";
import ReduxProvider from "@/store/ReduxProvider"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Flying Kiwi Web",
  description: "Modern, stylish web experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex flex-col min-h-screen">
        <ReduxProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
          <FloatingChatButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
