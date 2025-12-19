"use client";

import { Banner } from "../UIComponents/Banner";
import { Button } from "../UIComponents/Button";
import { useRouter } from "next/navigation";

const SupportBanner2 = () => {
  const router = useRouter();
  const handleSwitchToEsim = () => {
    router.push("/chat-window");
  };

  return (
    <div className="w-full">
      <Banner
        title="Ready to Make a Difference?"
        paragraph="Join hundreds of supporters who are already empowering athletes with special needs through Flying Kiwi Service."
        backgroundImage="/images/banner.png"
        overlayOpacity={0.45}
        align="center"
      >
        {/* ✅ Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          {/* <Button variant="gradient" size="lg" onClick={handleSwitchToEsim}>
            Switch to E-sim Now
          </Button> */}

          <Button variant="gradient" size="lg" onClick={handleSwitchToEsim}>
            Support with Chat
          </Button>
        </div>
      </Banner>
    </div>
  );
};

export default SupportBanner2;
