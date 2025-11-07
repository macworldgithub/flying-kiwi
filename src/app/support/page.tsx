import Features from "@/components/AppComponents/Features";
import SupportBanner2 from "../../components/AppComponents/SupportBanner2";
import SupportBanner from "@/components/AppComponents/SupportBanner";
import SupportPlans from "@/components/AppComponents/SupportPlans";
import FAQ from "@/components/AppComponents/FAQ";

export default function support() {
  return (
    <>
      <SupportBanner />
      <Features />
      <SupportPlans />
      <FAQ />
      <SupportBanner2 />
    </>
  );
}
