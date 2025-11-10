"use client";

import { Banner } from "../UIComponents/Banner";
import { useRouter } from "next/navigation";
const HomeBanner4 = () => {
  const router = useRouter();

  const handleSwitchToEsim = () => {
    router.push("/chat-window");
  };
  return (
    <div className="w-full">
      <Banner
        title="Ready to Make a Difference?"
        paragraph="Join hundreds of supporters who are already empowering athletes with special needs through Flying Kiwi Service."
        buttonText="Switch to E-sim Now"
        backgroundImage="/images/banner.png"
        overlayOpacity={0.45}
        align="center"
        onButtonClick={handleSwitchToEsim}
      />
    </div>
  );
};

export default HomeBanner4;
