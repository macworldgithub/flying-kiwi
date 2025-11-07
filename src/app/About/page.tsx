import HomeBanner3 from "@/components/AppComponents/HomeBanner3";
import AboutBanner2 from "../../components/AppComponents/AboutBanner2";
import { AboutBanner } from "@/components/AppComponents/AboutBanner";
import { Missions } from "@/components/AppComponents/Missions";
export default function Home() {
  return (
    <>
      <AboutBanner />
      <Missions />
      <AboutBanner2 />
      <HomeBanner3 />
    </>
  );
}
