import React from "react";
import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "Meet Our Team | Flying Kiwi Fitness",
  description: "Get to know the passionate experts behind Flying Kiwi Fitness.",
};

export default function MeetOurTeamPage() {
  return (
    <div className="pt-20"> {/* Padding top to avoid overlap with fixed navbar */}
      <TeamSection />
    </div>
  );
}
