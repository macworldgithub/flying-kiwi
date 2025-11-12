"use client";

import Image from "next/image";
import { Banner } from "../UIComponents/Banner";
import { Heading } from "../UIComponents/Heading";
import { Button } from "../UIComponents/Button";
import { useRouter } from "next/navigation";

export default function HomeBanner() {
  const router = useRouter();

  const handleSwitchToEsim = () => {
    router.push("/chat-window?fromBanner=true");
  };
  const handleMoreAboutUs = () => {
    router.push("/About");
  };

  return (
    <div className="w-full">
      <Banner
        title="Empowering Athletes with Special Needs"
        paragraph="Building independence, confidence, and improving life expectancy through accessible fitness and community programs."
        stats={[
          { value: "50K+", label: "Athletes Supported" },
          { value: "$2M+", label: "Raised for Programs" },
          { value: "100%", label: "Reliable Coverage" },
        ]}
        buttonText="Switch to E-sim"
        backgroundImage="/images/banner.png"
        overlayOpacity={0.45}
        align="left"
        onButtonClick={handleSwitchToEsim}
      />

      <div className="relative bg-white overflow-hidden -mt-px">
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between py-16 px-6 sm:px-10 md:px-16 lg:px-20 gap-10">
          <div className="w-full lg:w-1/2 text-left">
            <Heading title="Who We Are?" level={3} align="left" />
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              We are a nonprofit organization committed to empowering children
              through access to quality education, learning tools, and
              mentorship.
            </p>

            <Button variant="gradient" size="md" onClick={handleMoreAboutUs}>
              More About Us
            </Button>
          </div>

          <div className="relative w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/hand.png"
              alt="Who We Are"
              width={510}
              height={634}
              className="object-cover w-full max-w-[550px]"
            />
            <div className="absolute bottom-0 left-0 w-full h-20 sm:h-28 bg-linear-to-b from-transparent to-white pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
