"use client";

import Image from "next/image";
import { Banner } from "../UIComponents/Banner";
import { Heading } from "../UIComponents/Heading";
import { Button } from "../UIComponents/Button";
import { useRouter } from "next/navigation";

export default function HomeBanner() {
  const router = useRouter();

  const handleSwitchToEsim = () => {
    router.push("/chat-window?fromBanner=true");
  };
  

  return (
    <div className="w-full">
      <Banner
        title="Empowering Athletes with Special Needs"
        paragraph="Building independence, confidence, and improving life expectancy through accessible fitness and community programs."
        stats={[
          { value: "50K+", label: "Athletes Supported" },
          { value: "$2M+", label: "Raised for Programs" },
          { value: "100%", label: "Reliable Coverage" },
        ]}
        buttonText="Switch to E-sim"
        backgroundImage="/images/banner.png"
        overlayOpacity={0.45}
        align="left"
        onButtonClick={handleSwitchToEsim}
        bottomLabel={{
          title: "Every time you pay your mobile bill, you’re giving back.",
          description:
            "JUST mobile has partnered with Flying Kiwi so that 5% of your monthly spend goes directly towards supporting meaningful community initiatives, at no extra cost to you. Stay connected, and make a difference.",
        }}
      />

      
    </div>
  );
}
