"use client";

import { Banner } from "../UIComponents/Banner";

const HomeBanner2 = () => {
  return (
    <div className="w-full">
      <Banner
        title="Special Needs Athletes to Live Healthy, Confident & Strong"
        paragraph="Therefore, our mission is to to improve the life expectancy, daily independence and self-confidence of 
        all these Athletes through accessible, fun and results driven fitness and health programs for everyone living with 
        Special Needs around Australia, and eventually the world. We are the creators of the Strong Hearts Program, an All-Abilities 
        Sport and Recreation program, boosting cardiovascular health, motor skills, and of course making friends!"
        backgroundImage="/images/banner.png"
        overlayOpacity={0.45}
        align="center"
        waveColor="#ffffff"
        showTopWave
        showBottomWave
      />
    </div>
  );
};

export default HomeBanner2;
