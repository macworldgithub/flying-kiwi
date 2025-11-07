"use client";

import { Banner } from "../UIComponents/Banner";
import { Button } from "../UIComponents/Button";

const SupportBanner2 = () => {
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
          <Button
            variant="gradient"
            size="lg"
            onClick={() => alert("Switch to E-sim clicked!")}
          >
            Switch to E-sim Now
          </Button>

          <button
            onClick={() => alert("Support with Chat clicked!")}
            className="px-6 py-3 rounded-md text-white font-semibold shadow-md hover:opacity-90 transition-all duration-200"
            style={{ backgroundColor: "#EB0FB6" }}
          >
            Support with Chat
          </button>
        </div>
      </Banner>
    </div>
  );
};

export default SupportBanner2;
