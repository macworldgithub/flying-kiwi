// "use client";

// import React from "react";
// import Image from "next/image";

// const ContactBanner = () => (
//   <div className="w-full bg-[#82cbf9] hover:bg-[#6abef2] transition cursor-pointer py-4 text-center">
//     <span className="text-[#156e9e] font-semibold italic md:text-lg">
//       Click Here to Contact Us at Flying Kiwi Fitness!
//     </span>
//   </div>
// );

// export const FlyingFitness = () => {
//   return (
//     <div className="bg-[#619bc9] min-h-screen py-10 px-4 md:px-8 font-sans">
//       <div className="max-w-[1000px] mx-auto bg-white shadow-2xl mt-[80px] p-8 md:p-16">
        
//         {/* Intro */}
//         <p className="text-[#1f8cc6] font-bold text-center text-base md:text-lg leading-relaxed mb-10 uppercase">
//           We believe all athletes living with special needs deserve to live healthy, confident, long and strong lives.
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           Therefore, our mission is to to <strong className="text-gray-700">improve the life expectancy, daily independence and self-confidence of all these Athletes</strong> through accessible, fun and results driven fitness and health programs for everyone living with Special Needs around Australia, and eventually the world.
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           We are the creators of the Strong Hearts Program, an All-Abilities Sport and Recreation program, boosting cardiovascular health, motor skills, and of course making friends!
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-12 leading-relaxed">
//           We are also the Hosts of the Flying Kiwi Cup, a monument to success of Powerlifting Athletes with All Abilities.
//         </p>

//         {/* Coaching Program */}
//         <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-6">Flying Kiwi Coaching Program</h2>
//         <h3 className="text-[#f12eb6] text-2xl md:text-3xl font-bold text-center mb-8">Coaching for a more capable, independent, and longer life.</h3>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           The Perfect solution for goal achieving, happiness and self-confidence boosting premium coaching support for Athletes with Special Needs. Taking a customised approach to achieving goals set out in your NDIS plan (Or just goals for life!) and making sure the plan framework is multi-faceted - attacking from all angles in life!
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           Held at Goodlife Health Clubs, Chermside!
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           This 2 minutes and 25 seconds explains us pretty well ⬇️⬇️
//         </p>
//         <div className="aspect-video w-full max-w-[600px] mb-8">
//           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Training with Special Needs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//         </div>
//         <ContactBanner />

//         {/* Strong Hearts Program */}
//         <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-6 mt-14">The Strong Hearts Program</h2>
//         <h3 className="text-[#f12eb6] text-2xl md:text-3xl font-bold text-center mb-4">Special Needs Social Sport and Recreation Program</h3>
//         <h4 className="text-[#f12eb6] text-xl md:text-2xl font-bold text-center mb-10">ADDRESS: Northside Indoor Sports and Fitness, 17 Flinders Parade, North Lakes</h4>

//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           The Strong Hearts Program is our Group Special Needs Social, Sport and Recreation Program, creating a fun, Social, and loving environment focussed on Cardiovascular Health, Fine and Gross Motor Skills, and making friends all while not realising you are exercising!
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-10 leading-relaxed">
//           The Aim is to help the Athletes Associate Exercise with Happiness - because if we can help them achieve that, then in the years to come, they will all want to exercise because they find it enjoyable - not because its a chore - and therefore help to improve their own health and wellbeing for their longer lifestyle!
//         </p>
//         <div className="text-center mb-10">
//           <a href="#" className="text-[#65b2e8] underline">Check it out here</a>
//         </div>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           We want to get to know you as a Parent, or Carer, and really understand what you would love for your child to achieve in the short term, and long term.
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           As we know every person is unique, we want to get to know your child inside and out, so we can take the best calculated approach possible to achieve everything we can as a team.
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-8 leading-relaxed">
//           Please tap below to leave your details with us, and a member of the team will get in touch as soon as possible to help get on the way to a better way of life for your child - and you!
//         </p>

//         <ContactBanner />
//         <div className="text-center mt-2 text-[#5a6268] text-sm">
//           Tap here ⬆️⬆️⬆️
//         </div>

//         {/* The Flying Kiwi Cup */}
//         <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-6 mt-14">The Flying Kiwi Cup</h2>
//         <h3 className="text-[#f12eb6] text-2xl md:text-3xl font-bold text-center mb-10">The All Abilities Powerlifting Meet with HUGE Crowds</h3>
//         <p className="text-[#5a6268] text-sm md:text-base mb-8 leading-relaxed">
//           Giving our athletes something to aim for is a large part of any human's progress! We hold our Flying Kiwi Cup twice a year to give the athletes an opportunity to show their stuff on the platform in front of a big crowd, and it is always a big day of fun!
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-10 leading-relaxed">
//           "No Egos, just lifting with my friends" 💙
//         </p>
//         <div className="aspect-video w-full max-w-[600px] mb-8">
//           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="How To Increase The Confidence" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//         </div>
//         <ContactBanner />

//         {/* The Flying Kiwi Formal */}
//         <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-6 mt-14">The Flying Kiwi Formal</h2>
//         <h3 className="text-[#f12eb6] text-2xl md:text-3xl font-bold text-center mb-10">The Celebration of Achievement for all of our Participants</h3>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           Once a year we all come together as a team with our Support Workers, Parents, and Friends to acknowledge everything we have achieved in the last 12 months!
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           Flying Kiwi Athletes attend free as a part of their membership with us
//         </p>
//         <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
//           Check out the highlights from 2022 here:
//         </p>
//         <div className="aspect-video w-full max-w-[600px] mb-8">
//           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="The Flying Kiwi Formal 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//         </div>
        
//         <ContactBanner />
//         <div className="text-center mt-2 text-[#5a6268] text-sm mb-14">
//           Tap here ⬆️⬆️⬆️
//         </div>

//         {/* Feature on Channel 9 */}
//         <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-10">Our Feature on Channel 9&apos;s Sunrise!</h2>
//         <div className="aspect-video w-full max-w-[600px] mb-4">
//           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Training for Special Needs Featured on Sunrise" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//         </div>
//         <p className="text-[#5a6268] text-sm md:text-base mb-10 leading-relaxed">
//           Flying Kiwi Athlete Talitha having a blast with Coach Michael!
//         </p>

//         {/* The Image at the bottom */}
//         <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mt-8">
//             <Image src="/images/pic2.png" alt="Coach Michael" fill className="object-cover rounded-md" />
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s` }}>
      {children}
    </div>
  );
};

const ContactBanner = () => (
  <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", background: "#FF3C3C", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 2.5vw, 1.25rem)", letterSpacing: "0.05em", textTransform: "uppercase", padding: "1.1rem 2rem", borderRadius: "4px", textDecoration: "none", transition: "background 0.2s, transform 0.15s", cursor: "pointer", margin: "2rem 0" }}
    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#e02020"; (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.015)"; }}
    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#FF3C3C"; (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.44 2 2 0 0 1 3.53 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.94 5.94l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    Contact Flying Kiwi Fitness
  </a>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span style={{ display: "inline-block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF3C3C", marginBottom: "0.75rem" }}>{children}</span>
);

const Heading = ({ children, size = "xl" }: { children: React.ReactNode; size?: "xl" | "lg" | "md" }) => {
  const sizes: Record<string, string> = { xl: "clamp(2.5rem, 6vw, 4.5rem)", lg: "clamp(2rem, 4vw, 3rem)", md: "clamp(1.4rem, 3vw, 2rem)" };
  return (
    <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: sizes[size], lineHeight: 1.05, letterSpacing: "-0.01em", color: "#0a0a0a", margin: "0 0 1rem" }}>{children}</h2>
  );
};

const VideoEmbed = ({ src, title }: { src: string; title: string }) => (
  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "6px", overflow: "hidden", background: "#111" }}>
    <iframe src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
  </div>
);

const Divider = () => <div style={{ height: "1px", background: "linear-gradient(90deg, #FF3C3C 0%, #0070F3 50%, transparent 100%)", margin: "0 0 4rem" }} />;

export const FlyingFitness = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f8f7f5; }
        .fkf-body { font-family: 'Barlow', sans-serif; color: #1a1a1a; background: #f8f7f5; min-height: 100vh; }
        .fkf-nav { position: sticky; top: 0; z-index: 100; background: rgba(248,247,245,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.07); padding: 0.9rem 2rem; display: flex; align-items: center; justify-content: space-between; }
        .fkf-nav-logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.15rem; letter-spacing: 0.04em; text-transform: uppercase; color: #0a0a0a; }
        .fkf-nav-logo span { color: #FF3C3C; }
        .fkf-nav-cta { background: #FF3C3C; color: #fff; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase; border: none; padding: 0.55rem 1.2rem; border-radius: 3px; cursor: pointer; transition: background 0.2s; }
        .fkf-nav-cta:hover { background: #e02020; }
        .fkf-hero { min-height: 92vh; background: #0a0a0a; display: grid; grid-template-columns: 1fr; align-items: center; position: relative; overflow: hidden; padding: 6rem 2rem 4rem; }
        .fkf-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 80% 50%, rgba(0,112,243,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(255,60,60,0.12) 0%, transparent 60%); pointer-events: none; }
        .fkf-hero-noise { position: absolute; inset: 0; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .fkf-hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .fkf-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase; color: #FF3C3C; margin-bottom: 1.5rem; }
        .fkf-hero-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 2px; background: #FF3C3C; }
        .fkf-hero-h1 { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(3.5rem, 10vw, 8rem); line-height: 0.92; letter-spacing: -0.02em; color: #ffffff; margin-bottom: 1.5rem; }
        .fkf-hero-h1 .accent { color: #FF3C3C; font-style: italic; }
        .fkf-hero-h1 .accent-blue { color: #4DA3FF; }
        .fkf-hero-sub { font-size: clamp(1rem, 2.2vw, 1.2rem); color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 540px; margin-bottom: 2.5rem; }
        .fkf-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .fkf-btn-primary { background: #FF3C3C; color: #fff; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.12em; text-transform: uppercase; border: none; padding: 0.9rem 2rem; border-radius: 3px; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s; display: inline-block; }
        .fkf-btn-primary:hover { background: #e02020; transform: translateY(-1px); }
        .fkf-btn-outline { background: transparent; color: #fff; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.12em; text-transform: uppercase; border: 1px solid rgba(255,255,255,0.25); padding: 0.9rem 2rem; border-radius: 3px; cursor: pointer; text-decoration: none; transition: border-color 0.2s, background 0.2s; display: inline-block; }
        .fkf-btn-outline:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.05); }
        .fkf-hero-stats { display: flex; gap: 2.5rem; flex-wrap: wrap; margin-top: 4rem; padding-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.1); }
        .fkf-stat-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 4vw, 2.8rem); color: #fff; line-height: 1; }
        .fkf-stat-label { font-size: 0.82rem; color: rgba(255,255,255,0.45); margin-top: 4px; letter-spacing: 0.04em; }
        .fkf-section { padding: 5rem 2rem; }
        .fkf-section-inner { max-width: 1100px; margin: 0 auto; }
        .fkf-mission { background: #fff; }
        .fkf-mission-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .fkf-mission-quote { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: clamp(1.5rem, 3vw, 2.2rem); line-height: 1.2; color: #0a0a0a; border-left: 4px solid #FF3C3C; padding-left: 1.5rem; }
        .fkf-mission-body { font-size: 1.05rem; color: #555; line-height: 1.8; }
        .fkf-mission-body strong { color: #0a0a0a; }
        .fkf-programs { background: #f8f7f5; }
        .fkf-programs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
        .fkf-program-card { background: #fff; border-radius: 6px; overflow: hidden; border: 1px solid rgba(0,0,0,0.07); transition: transform 0.2s, box-shadow 0.2s; }
        .fkf-program-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .fkf-program-card-head { padding: 1.75rem 1.75rem 0; }
        .fkf-program-card-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 3.5rem; line-height: 1; color: #f0efed; }
        .fkf-program-card-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.5rem; color: #0a0a0a; margin: 0.5rem 0 0.5rem; }
        .fkf-program-card-badge { display: inline-block; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 2px; margin-bottom: 1rem; }
        .badge-red { background: #fff0f0; color: #FF3C3C; }
        .badge-blue { background: #eff5ff; color: #0070F3; }
        .badge-purple { background: #f5f0ff; color: #7c3aed; }
        .fkf-program-card-body { padding: 0 1.75rem 1.75rem; font-size: 0.95rem; color: #666; line-height: 1.75; border-top: 1px solid #f0efed; margin-top: 1rem; padding-top: 1rem; }
        .fkf-program-card-footer { padding: 1rem 1.75rem; background: #f8f7f5; border-top: 1px solid #efefed; font-size: 0.82rem; color: #888; display: flex; align-items: center; gap: 6px; }
        .fkf-feature { background: #0a0a0a; }
        .fkf-feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .fkf-feature-text h2 { color: #fff; }
        .fkf-feature-text .fkf-mission-body { color: rgba(255,255,255,0.55); }
        .fkf-feature-text .fkf-mission-body strong { color: #fff; }
        .fkf-feature-video { border-radius: 6px; overflow: hidden; }
        .fkf-quote-block { background: #fff; padding: 2rem; border-radius: 6px; margin-top: 2rem; border-left: 4px solid #0070F3; }
        .fkf-quote-text { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-style: italic; font-size: 1.4rem; color: #0a0a0a; }
        .fkf-events { background: #fff; }
        .fkf-events-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .fkf-event-card { position: relative; background: #f8f7f5; border-radius: 6px; padding: 2rem; overflow: hidden; }
        .fkf-event-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; }
        .fkf-event-card.red::after { background: #FF3C3C; }
        .fkf-event-card.blue::after { background: #0070F3; }
        .fkf-event-card.purple::after { background: #7c3aed; }
        .fkf-event-icon { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 2.5rem; margin-bottom: 1rem; line-height: 1; }
        .fkf-event-card-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.3rem; color: #0a0a0a; margin-bottom: 0.5rem; }
        .fkf-event-card-body { font-size: 0.9rem; color: #666; line-height: 1.7; }
        .fkf-media { background: #f8f7f5; }
        .fkf-media-inner { max-width: 800px; margin: 0 auto; text-align: center; }
        .fkf-media-badge { display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 1px solid rgba(0,0,0,0.1); padding: 0.5rem 1.2rem; border-radius: 20px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.06em; color: #0a0a0a; margin-bottom: 1.5rem; }
        .fkf-cta-section { background: #FF3C3C; padding: 5rem 2rem; text-align: center; }
        .fkf-cta-inner { max-width: 700px; margin: 0 auto; }
        .fkf-cta-h2 { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2.5rem, 6vw, 4rem); color: #fff; line-height: 1.05; margin-bottom: 1rem; }
        .fkf-cta-sub { color: rgba(255,255,255,0.75); font-size: 1.1rem; margin-bottom: 2.5rem; line-height: 1.7; }
        .fkf-cta-btn { background: #fff; color: #FF3C3C; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1rem; letter-spacing: 0.12em; text-transform: uppercase; border: none; padding: 1rem 2.5rem; border-radius: 3px; cursor: pointer; text-decoration: none; transition: transform 0.15s, opacity 0.15s; display: inline-block; }
        .fkf-cta-btn:hover { transform: scale(1.03); opacity: 0.93; }
        .fkf-footer { background: #0a0a0a; padding: 2.5rem 2rem; }
        .fkf-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .fkf-footer-logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.1rem; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
        .fkf-footer-logo span { color: #FF3C3C; }
        .fkf-footer-copy { font-size: 0.82rem; color: rgba(255,255,255,0.3); }

        @media (max-width: 768px) {
          .fkf-mission-grid, .fkf-feature-grid { grid-template-columns: 1fr; gap: 2rem; }
          .fkf-hero-stats { gap: 1.5rem; }
          .fkf-section { padding: 3.5rem 1.25rem; }
          .fkf-nav { padding: 0.75rem 1.25rem; }
          .fkf-hero { padding: 5rem 1.25rem 3rem; }
          .fkf-footer-inner { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .fkf-programs-grid, .fkf-events-grid { grid-template-columns: 1fr; }
          .fkf-hero-actions { flex-direction: column; }
          .fkf-hero-actions a { text-align: center; }
        }
      `}</style>

      <div className="fkf-body">
        {/* Nav */}
        <nav className="fkf-nav">
          <div className="fkf-nav-logo">Flying <span>Kiwi</span> Fitness</div>
          <button className="fkf-nav-cta" onClick={() => window.location.href="#contact"}>Get in Touch</button>
        </nav>

        {/* Hero */}
        <section className="fkf-hero">
          <div className="fkf-hero-noise" />
          <div className="fkf-hero-inner">
            <div className="fkf-hero-eyebrow">Australia's All-Abilities Fitness</div>
            <h1 className="fkf-hero-h1">
              Every <span className="accent">Athlete</span><br />
              Deserves to<br />
              <span className="accent-blue">Thrive</span>
            </h1>
            <p className="fkf-hero-sub">
              Empowering athletes with special needs through accessible, fun, and results-driven fitness programs across Australia — and eventually the world.
            </p>
            <div className="fkf-hero-actions">
              <a href="#contact" className="fkf-btn-primary">Contact Us Today</a>
              <a href="#programs" className="fkf-btn-outline">Explore Programs</a>
            </div>
            <div className="fkf-hero-stats">
              {[["2×/yr", "Flying Kiwi Cup"], ["2", "Core Programs"], ["100%", "All-Abilities Focus"], ["1", "Annual Formal"]].map(([n, l]) => (
                <div key={l}>
                  <div className="fkf-stat-num">{n}</div>
                  <div className="fkf-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="fkf-section fkf-mission">
          <div className="fkf-section-inner">
            <Reveal>
              <div className="fkf-mission-grid">
                <div>
                  <SectionLabel>Our Mission</SectionLabel>
                  <div className="fkf-mission-quote">
                    "We believe all athletes living with special needs deserve to live healthy, confident, long and strong lives."
                  </div>
                </div>
                <div className="fkf-mission-body">
                  <p style={{ marginBottom: "1.25rem" }}>
                    Our mission is to <strong>improve life expectancy, daily independence, and self-confidence</strong> of all these Athletes through accessible, fun, and results-driven fitness and health programs for everyone living with Special Needs.
                  </p>
                  <p>
                    We are the creators of the <strong>Strong Hearts Program</strong> — an All-Abilities Sport and Recreation program boosting cardiovascular health, motor skills, and making lasting friendships. We are also the hosts of the <strong>Flying Kiwi Cup</strong>, a powerlifting meet celebrating athletes with all abilities.
                  </p>
                  <ContactBanner />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Programs */}
        <section className="fkf-section fkf-programs" id="programs">
          <div className="fkf-section-inner">
            <Reveal>
              <SectionLabel>What We Offer</SectionLabel>
              <Heading size="xl">Our Programs</Heading>
            </Reveal>
            <div className="fkf-programs-grid">
              {[
                {
                  num: "01", title: "Coaching Program", badge: "Premium", badgeClass: "badge-red",
                  body: "Customised coaching support aligned to your NDIS plan goals — attacking from all angles in life. Goal achieving, happiness-boosting, and confidence-building for athletes with special needs.",
                  location: "Goodlife Health Clubs, Chermside"
                },
                {
                  num: "02", title: "Strong Hearts Program", badge: "Group Program", badgeClass: "badge-blue",
                  body: "A fun, social, and loving group environment focused on cardiovascular health, fine and gross motor skills. Athletes associate exercise with happiness — not a chore.",
                  location: "Northside Indoor Sports, North Lakes"
                },
                {
                  num: "03", title: "NDIS Support", badge: "Funded", badgeClass: "badge-purple",
                  body: "We take a customised, multi-faceted approach to achieving the goals set out in your NDIS plan. We get to know you as a parent, carer, and athlete inside and out.",
                  location: "Australia-wide"
                }
              ].map(({ num, title, badge, badgeClass, body, location }, i) => (
                <Reveal key={num} delay={i * 0.1}>
                  <div className="fkf-program-card">
                    <div className="fkf-program-card-head">
                      <div className="fkf-program-card-num">{num}</div>
                      <div className="fkf-program-card-title">{title}</div>
                      <span className={`fkf-program-card-badge ${badgeClass}`}>{badge}</span>
                    </div>
                    <div className="fkf-program-card-body">{body}</div>
                    <div className="fkf-program-card-footer">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {location}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Program Detail */}
        <section className="fkf-section fkf-feature">
          <div className="fkf-section-inner">
            <Reveal>
              <div className="fkf-feature-grid">
                <div className="fkf-feature-text">
                  <SectionLabel>Flying Kiwi Coaching</SectionLabel>
                  <Heading size="lg"><span style={{ color: "#fff" }}>Coaching for a more capable, independent, and longer life.</span></Heading>
                  <div className="fkf-mission-body">
                    <p style={{ marginBottom: "1.25rem" }}>
                      The perfect solution for goal-achieving, happiness and self-confidence boosting premium coaching support for athletes with Special Needs. Watch the 2 minute intro below.
                    </p>
                  </div>
                  <ContactBanner />
                </div>
                <div className="fkf-feature-video">
                  <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flying Kiwi Coaching Program" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Strong Hearts */}
        <section className="fkf-section fkf-mission">
          <div className="fkf-section-inner">
            <Reveal>
              <div className="fkf-feature-grid">
                <div>
                  <SectionLabel>Strong Hearts Program</SectionLabel>
                  <Heading size="lg">Special Needs Social Sport &amp; Recreation</Heading>
                  <div style={{ background: "#eff5ff", borderRadius: "4px", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.9rem", color: "#0070F3", fontWeight: 600 }}>
                    📍 Northside Indoor Sports and Fitness — 17 Flinders Parade, North Lakes
                  </div>
                  <p className="fkf-mission-body" style={{ marginBottom: "1rem" }}>
                    A fun, social, and loving environment focused on Cardiovascular Health, Fine and Gross Motor Skills, and making friends — all while not realising you&apos;re exercising!
                  </p>
                  <p className="fkf-mission-body">
                    We want to help athletes associate exercise with happiness, so in years to come they exercise because they <strong>enjoy it</strong> — not because it&apos;s a chore.
                  </p>
                  <ContactBanner />
                </div>
                <div>
                  <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Strong Hearts Program" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Events */}
        <section className="fkf-section fkf-events">
          <div className="fkf-section-inner">
            <Reveal>
              <SectionLabel>Events &amp; Celebrations</SectionLabel>
              <Heading size="xl">Mark the Calendar</Heading>
            </Reveal>
            <div className="fkf-events-grid">
              {[
                { icon: "🏋️", title: "The Flying Kiwi Cup", color: "red", body: "Twice a year, athletes show their stuff on the powerlifting platform in front of a big crowd. Always a huge day of fun — no egos, just lifting with friends.", badge: "2× Per Year" },
                { icon: "🎉", title: "The Flying Kiwi Formal", color: "blue", body: "Once a year we come together with support workers, parents and friends to acknowledge everything achieved. Flying Kiwi athletes attend free as part of their membership.", badge: "Annual" },
                { icon: "📺", title: "On Channel 9 Sunrise", color: "purple", body: "Flying Kiwi Fitness was featured on Channel 9's Sunrise program — watch our amazing athletes and coaches share their story with Australia.", badge: "Media Feature" }
              ].map(({ icon, title, color, body, badge }, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className={`fkf-event-card ${color}`}>
                    <div className="fkf-event-icon">{icon}</div>
                    <div className="fkf-event-card-title">{title}</div>
                    <div style={{ marginBottom: "0.75rem" }}>
                      <span className={`fkf-program-card-badge badge-${color === "purple" ? "purple" : color === "blue" ? "blue" : "red"}`}>{badge}</span>
                    </div>
                    <div className="fkf-event-card-body">{body}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div style={{ marginTop: "3rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <SectionLabel>Flying Kiwi Cup</SectionLabel>
                  <Heading size="md">The All-Abilities Powerlifting Meet</Heading>
                </div>
                <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flying Kiwi Cup" />
                <div className="fkf-quote-block">
                  <div className="fkf-quote-text">"No egos, just lifting with my friends."</div>
                </div>
                <ContactBanner />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ marginTop: "3rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <SectionLabel>Annual Celebration</SectionLabel>
                  <Heading size="md">Flying Kiwi Formal 2022</Heading>
                </div>
                <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flying Kiwi Formal 2022" />
                <ContactBanner />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Media */}
        <section className="fkf-section fkf-media">
          <div className="fkf-media-inner">
            <Reveal>
              <div style={{ marginBottom: "2rem" }}>
                <div className="fkf-media-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  As seen on Channel 9 Sunrise
                </div>
              </div>
              <SectionLabel>Media</SectionLabel>
              <Heading size="xl">Featured on Sunrise</Heading>
              <p style={{ color: "#666", fontSize: "1.05rem", lineHeight: 1.75, margin: "1rem 0 2rem" }}>
                Watch our amazing journey — Flying Kiwi Athlete Talitha having a blast with Coach Michael!
              </p>
              <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flying Kiwi on Channel 9 Sunrise" />
            </Reveal>
          </div>
        </section>

        {/* Image */}
        <section className="fkf-section fkf-mission" style={{ paddingTop: "0", paddingBottom: "0" }}>
          <div className="fkf-section-inner">
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", borderRadius: "6px", overflow: "hidden" }}>
              <Image src="/images/pic2.png" alt="Coach Michael with Flying Kiwi Athletes" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fkf-cta-section" id="contact">
          <div className="fkf-cta-inner">
            <Reveal>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "1rem" }}>Join the Team</div>
              <div className="fkf-cta-h2">Ready to Make a Difference?</div>
              <p className="fkf-cta-sub">Leave your details and a member of our team will get in touch as soon as possible to help get on the way to a better way of life.</p>
              <a href="mailto:hello@flyingkiwifitness.com.au" className="fkf-cta-btn">Get in Touch Today</a>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="fkf-footer">
          <div className="fkf-footer-inner">
            <div className="fkf-footer-logo">Flying <span>Kiwi</span> Fitness</div>
            <div className="fkf-footer-copy">© 2024 Flying Kiwi Fitness — Empowering Athletes with Special Needs</div>
          </div>
        </footer>
      </div>
    </>
  );
};
