"use client";

// import ChangePlan from "@/components/AppComponents/ChangePlan";
import HomeBanner from "@/components/AppComponents/HomeBanner";
import HomeBanner2 from "@/components/AppComponents/HomeBanner2";
import HomeBanner3 from "@/components/AppComponents/HomeBanner3";
import HomeBanner4 from "@/components/AppComponents/HomeBanner4";
import OurPrograms from "@/components/AppComponents/OurPrograms";
import SupportPlans from "@/components/AppComponents/SupportPlans";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <SupportPlans />
      <OurPrograms />
      {/* <ChangePlan /> */}
      <HomeBanner2 />
      <HomeBanner3 />
      <HomeBanner4 />
    </>
  );
}
