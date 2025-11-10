"use client";

import { Banner } from "../UIComponents/Banner";
import { Button } from "../UIComponents/Button";
import { useRouter } from "next/navigation";
const SupportBanner2 = () => {
  const router = useRouter();

  const handleSwitchToEsim = () => {
    router.push("/chat-window");
  };

  const handleSwitchtoSupport = () => {
    router.push("/support");
  };
  return (
    <div className="w-full">
      <Banner
        title="Support Our Programs"
        paragraph="Switch to Flying Kiwi Service and help fund these life-changing programs for athletes with special needs."
        backgroundImage="/images/banner.png"
        overlayOpacity={0.45}
        align="center"
      >
        {/* ✅ Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          {/* <Button variant="gradient" size="lg" onClick={handleSwitchToEsim}>
            Switch to E-sim Now
          </Button> */}

          <button
            // onClick={() => alert("Support with Chat clicked!")}
            className="px-6 py-3 rounded-md text-white font-semibold shadow-md hover:opacity-90 transition-all duration-200"
            style={{ backgroundColor: "#EB0FB6" }}
            onClick={handleSwitchToEsim}
          >
            Support with Chat
          </button>
        </div>
      </Banner>
    </div>
  );
};

export default SupportBanner2;
