import HomeBanner from "@/components/AppComponents/HomeBanner";
import HomeBanner2 from "@/components/AppComponents/HomeBanner2";
import HomeBanner3 from "@/components/AppComponents/HomeBanner3";
import OurPrograms from "@/components/AppComponents/OurPrograms";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <OurPrograms />
      <HomeBanner2/>
      <HomeBanner3/>
    </div>
  );
}
