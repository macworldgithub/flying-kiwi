import HomeBanner from "@/components/AppComponents/HomeBanner";
import HomeBanner2 from "@/components/AppComponents/HomeBanner2";
import HomeBanner3 from "@/components/AppComponents/HomeBanner3";
import HomeBanner4 from "@/components/AppComponents/HomeBanner4";
import OurPrograms from "@/components/AppComponents/OurPrograms";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <OurPrograms />
      <HomeBanner2 />
      <HomeBanner3 />
      <HomeBanner4 />
      <Footer />
    </div>
  );
}
