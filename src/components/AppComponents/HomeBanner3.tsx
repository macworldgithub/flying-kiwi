"use client";
import { Banner } from "../UIComponents/Banner";


const HomeBanner3 = () => {
    return (
        <div className="w-full -mt-px bg-green-800">
            <Banner
                title="Impact Stats"
                paragraph="Flying Kiwi has changed my life. The support, the training, and the community have helped me achieve things I never thought possible. I'm stronger, more confident, and happier."
                stats={[
                    { value: "500+", label: "SIM Switches" },
                    { value: "$50K+", label: "Raised" },
                    { value: "80+", label: "NPS Score" },
                    { value: "99.9%", label: "Uptime" },
                ]}
                backgroundImage="/images/banner3.png"
                overlayOpacity={0.25}
                align="center"
                showFloatingCircles
            />
        </div>
    );
};

export default HomeBanner3;
