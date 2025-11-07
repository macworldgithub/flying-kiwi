"use client";

import { Banner } from "../UIComponents/Banner";

const HomeBanner4 = () => {
  return (
    <div className="w-full">
      <Banner
        title="Ready to Make a Difference?"
        paragraph="Join hundreds of supporters who are already empowering athletes with special needs through Flying Kiwi Service."
        buttonText="Switch to E-sim Now"
        onButtonClick={() => alert("Banner button clicked!")}
        backgroundImage="/images/banner.png"
        overlayOpacity={0.45}
        align="center"
      />
    </div>
  );
};

export default HomeBanner4;
