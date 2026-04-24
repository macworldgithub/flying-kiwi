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

/* ─── Scroll reveal hook ─── */
const useInView = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
};

/* ─── Ticker ─── */
const TICKER_TEXT = "Every time you pay your mobile bill, you're giving back.  •  JUST mobile has partnered with Flying Kiwi so that 5% of your monthly spend goes directly towards supporting meaningful community programs  •  Stay connected and make a difference  •  ";

const Ticker = () => (
  <div style={{ background: "#fff", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "10px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
    <div style={{ display: "inline-block", animation: "fkf-ticker 42s linear infinite" }}>
      {[...Array(3)].map((_, i) => (
        <span key={i} style={{ fontSize: "0.85rem", color: "#333", marginRight: "3rem" }}>
          {TICKER_TEXT}
        </span>
      ))}
    </div>
  </div>
);

/* ─── Shared CTA Banner ─── */
const ContactBanner = () => (
  <a
    href="#contact"
    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "linear-gradient(135deg, #d63af9 0%, #6c5ce7 100%)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "clamp(0.95rem, 2vw, 1.1rem)", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none", transition: "opacity 0.2s, transform 0.15s", cursor: "pointer", margin: "1.75rem 0", boxShadow: "0 4px 20px rgba(108,92,231,0.3)" }}
    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.44 2 2 0 0 1 3.53 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.94 5.94l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    Click Here to Contact Us at Flying Kiwi Fitness!
  </a>
);

const VideoEmbed = ({ src, title }: { src: string; title: string }) => (
  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "12px", overflow: "hidden", background: "#111", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
    <iframe src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
  </div>
);

const NAV_LINKS = ["Home", "Program", "FlyingKiwiFitness", "Meet Our Team", "The Strong Hearts Program", "Support", "About", "Contact"];

export const FlyingFitness = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fkf-ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes fkf-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        .fkf { font-family: 'DM Sans', sans-serif; color: #1a1a2e; background: #f9f9fb; min-height: 100vh; }

        /* NAV */
        .fkf-nav { position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.97); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,0.08); padding: 0 2rem; height: 64px; display: flex; align-items: center; justify-content: space-between; transition: box-shadow 0.2s; }
        .fkf-nav.scrolled { box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
        .fkf-logo { font-weight: 700; font-size: 1.2rem; background: linear-gradient(135deg, #d63af9, #6c5ce7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; white-space: nowrap; text-decoration: none; }
        .fkf-nav-links { display: flex; align-items: center; gap: 0.1rem; list-style: none; }
        .fkf-nav-links a { font-size: 0.8rem; font-weight: 500; color: #444; text-decoration: none; padding: 0.4rem 0.6rem; border-radius: 6px; transition: background 0.15s, color 0.15s; white-space: nowrap; }
        .fkf-nav-links a:hover { background: #f3f0ff; color: #6c5ce7; }
        .fkf-nav-btn { background: linear-gradient(135deg, #d63af9, #6c5ce7) !important; color: #fff !important; padding: 0.45rem 1.2rem !important; border-radius: 8px !important; font-weight: 600 !important; }
        .fkf-nav-btn:hover { opacity: 0.88; }
        .fkf-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; border: none; background: none; }
        .fkf-hamburger span { display: block; width: 22px; height: 2px; background: #333; border-radius: 2px; }
        .fkf-mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; background: #fff; border-bottom: 1px solid #eee; z-index: 99; padding: 1rem; flex-direction: column; gap: 0.25rem; }
        .fkf-mobile-menu.open { display: flex; }
        .fkf-mobile-menu a { font-size: 0.95rem; font-weight: 500; color: #333; text-decoration: none; padding: 0.65rem 1rem; border-radius: 8px; transition: background 0.15s; }
        .fkf-mobile-menu a:hover { background: #f3f0ff; color: #6c5ce7; }

        /* HERO */
        .fkf-hero { position: relative; min-height: 88vh; display: flex; align-items: flex-end; overflow: hidden; }
        .fkf-hero-bg { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,30,0.28) 0%, rgba(10,10,30,0.6) 100%), url('/images/pic2.png') center/cover no-repeat; }
        .fkf-hero-content { position: relative; z-index: 2; padding: 4rem 2rem 4.5rem; max-width: 1200px; margin: 0 auto; width: 100%; }
        .fkf-hero-h1 { font-weight: 700; font-size: clamp(2.4rem, 5.5vw, 4.2rem); line-height: 1.1; color: #fff; max-width: 640px; margin-bottom: 1rem; animation: fkf-fadeUp 0.7s ease both; }
        .fkf-hero-sub { font-size: clamp(0.95rem, 1.8vw, 1.1rem); color: rgba(255,255,255,0.82); max-width: 560px; line-height: 1.8; margin-bottom: 2rem; font-weight: 500; animation: fkf-fadeUp 0.7s 0.15s ease both; }
        .fkf-hero-btn { display: inline-block; background: linear-gradient(135deg, #d63af9, #6c5ce7); color: #fff; font-weight: 600; font-size: 0.95rem; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; transition: opacity 0.2s, transform 0.15s; animation: fkf-fadeUp 0.7s 0.25s ease both; box-shadow: 0 4px 20px rgba(108,92,231,0.45); }
        .fkf-hero-btn:hover { opacity: 0.88; transform: translateY(-2px); }
        .fkf-hero-stats { display: flex; gap: 2.5rem; flex-wrap: wrap; margin-top: 3rem; animation: fkf-fadeUp 0.7s 0.35s ease both; }
        .fkf-stat-val { font-weight: 700; font-size: clamp(1.8rem, 3.5vw, 2.4rem); color: #fff; line-height: 1; }
        .fkf-stat-lbl { font-size: 0.82rem; color: rgba(255,255,255,0.58); margin-top: 4px; }

        /* LAYOUT */
        .fkf-section { padding: 5rem 2rem; }
        .fkf-inner { max-width: 1100px; margin: 0 auto; }
        .fkf-white { background: #fff; }
        .fkf-tinted { background: #f9f9fb; }

        .fkf-eyebrow { display: inline-block; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #6c5ce7; margin-bottom: 0.75rem; }
        .fkf-h2 { font-weight: 700; font-size: clamp(1.9rem, 4vw, 2.8rem); line-height: 1.15; color: #1a1a2e; margin-bottom: 0.75rem; }
        .fkf-pink-sub { font-size: clamp(0.9rem, 1.5vw, 1.05rem); color: #d63af9; font-weight: 600; margin-bottom: 1.25rem; }
        .fkf-body-text { font-size: 1rem; color: #555; line-height: 1.82; margin-bottom: 1rem; }
        .fkf-body-text strong { color: #1a1a2e; }
        .fkf-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(108,92,231,0.18), transparent); }

        /* MISSION BLOCK */
        .fkf-mission-block { background: linear-gradient(135deg, #fdf4ff 0%, #f0edff 100%); border-left: 4px solid #d63af9; border-radius: 0 12px 12px 0; padding: 1.75rem 2rem; margin-bottom: 1.75rem; }
        .fkf-mission-block p { font-size: clamp(1.05rem, 2vw, 1.3rem); font-weight: 600; color: #1a1a2e; line-height: 1.55; }

        /* 2-COL */
        .fkf-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .fkf-2col-top { align-items: start; }

        /* CARDS */
        .fkf-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.5rem; margin-top: 2.5rem; }
        .fkf-card { background: #fff; border-radius: 14px; border: 1px solid rgba(0,0,0,0.07); padding: 1.75rem; transition: transform 0.2s, box-shadow 0.2s; position: relative; overflow: hidden; }
        .fkf-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #d63af9, #6c5ce7); border-radius: 14px 14px 0 0; }
        .fkf-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(108,92,231,0.13); }
        .fkf-card-num { font-size: 2.5rem; font-weight: 800; color: #ede9ff; line-height: 1; margin-bottom: 0.25rem; }
        .fkf-card-title { font-weight: 700; font-size: 1.08rem; color: #1a1a2e; margin-bottom: 0.4rem; }
        .fkf-badge { display: inline-block; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 10px; border-radius: 20px; margin-bottom: 0.75rem; }
        .b-purple { background: #f0edff; color: #6c5ce7; }
        .b-pink { background: #fdf0ff; color: #d63af9; }
        .b-teal { background: #e6faf5; color: #00b894; }
        .fkf-card-body { font-size: 0.92rem; color: #666; line-height: 1.75; }
        .fkf-card-footer { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; font-size: 0.8rem; color: #aaa; display: flex; align-items: center; gap: 6px; }

        /* QUOTE */
        .fkf-quote { background: linear-gradient(135deg, #fdf4ff, #f0edff); border-radius: 12px; padding: 1.75rem 2rem; margin: 1.5rem 0; }
        .fkf-quote p { font-size: 1.25rem; font-weight: 600; color: #1a1a2e; font-style: italic; }

        /* LOCATION */
        .fkf-location-pill { display: inline-flex; align-items: center; gap: 6px; background: #eff5ff; color: #2d6be4; font-size: 0.84rem; font-weight: 600; padding: 0.45rem 1rem; border-radius: 20px; margin-bottom: 1.1rem; }

        /* EVENT CARDS */
        .fkf-event-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2.5rem; }
        .fkf-event-card { background: #fff; border-radius: 14px; padding: 1.75rem; border: 1px solid rgba(0,0,0,0.07); transition: transform 0.2s, box-shadow 0.2s; }
        .fkf-event-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.09); }
        .fkf-event-emoji { font-size: 2rem; margin-bottom: 0.75rem; }
        .fkf-event-title { font-weight: 700; font-size: 1.05rem; color: #1a1a2e; margin-bottom: 0.4rem; }
        .fkf-event-body { font-size: 0.9rem; color: #666; line-height: 1.72; }

        /* CTA */
        .fkf-cta { background: linear-gradient(135deg, #d63af9 0%, #6c5ce7 100%); padding: 5rem 2rem; text-align: center; position: relative; overflow: hidden; }
        .fkf-cta::before { content: ''; position: absolute; top: -40%; right: -10%; width: 600px; height: 600px; border-radius: 50%; background: rgba(255,255,255,0.06); pointer-events: none; }
        .fkf-cta-inner { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
        .fkf-cta h2 { font-weight: 700; font-size: clamp(2rem, 5vw, 3rem); color: #fff; margin-bottom: 1rem; line-height: 1.1; }
        .fkf-cta p { color: rgba(255,255,255,0.8); font-size: 1.05rem; line-height: 1.78; margin-bottom: 2rem; }
        .fkf-cta-btn { display: inline-block; background: #fff; color: #6c5ce7; font-weight: 700; font-size: 1rem; padding: 0.9rem 2.2rem; border-radius: 8px; text-decoration: none; transition: transform 0.15s, opacity 0.15s; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        .fkf-cta-btn:hover { transform: translateY(-2px); opacity: 0.95; }

        /* FOOTER */
        .fkf-footer { background: #1a1a2e; padding: 2.5rem 2rem; }
        .fkf-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .fkf-footer-logo { font-weight: 700; font-size: 1.1rem; background: linear-gradient(135deg, #d63af9, #a29bfe); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .fkf-footer-copy { font-size: 0.82rem; color: rgba(255,255,255,0.3); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .fkf-nav-links { display: none; }
          .fkf-hamburger { display: flex; }
          .fkf-2col { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        @media (max-width: 600px) {
          .fkf-section { padding: 3.5rem 1.25rem; }
          .fkf-hero-content { padding: 3rem 1.25rem 3.5rem; }
          .fkf-hero-stats { gap: 1.5rem; }
          .fkf-footer-inner { flex-direction: column; }
        }
      `}</style>

      <div className="fkf">

        {/* NAV */}
        <nav className={`fkf-nav${scrolled ? " scrolled" : ""}`}>
          <a href="#" className="fkf-logo">Flying Kiwi Fitness</a>
          <ul className="fkf-nav-links">
            {NAV_LINKS.map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
            <li><a href="#contact" className="fkf-nav-btn">Login</a></li>
          </ul>
          <button className="fkf-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </nav>

        <div className={`fkf-mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map(link => <a key={link} href="#" onClick={() => setMenuOpen(false)}>{link}</a>)}
          <a href="#contact" style={{ background: "linear-gradient(135deg,#d63af9,#6c5ce7)", color: "#fff", fontWeight: 600 }} onClick={() => setMenuOpen(false)}>Login</a>
        </div>

        {/* HERO */}
        <section className="fkf-hero">
          <div className="fkf-hero-bg" />
          <div className="fkf-hero-content">
            <h1 className="fkf-hero-h1">Empowering Athletes with Special Needs</h1>
            <p className="fkf-hero-sub">Building independence, confidence, and improving life expectancy through accessible fitness and community programs.</p>
            <a href="#contact" className="fkf-hero-btn">Get In Touch Today</a>
            <div className="fkf-hero-stats">
              {[["50K+", "Athletes Supported"], ["$2M+", "Raised for Programs"], ["100%", "All-Abilities Focus"], ["2×/yr", "Flying Kiwi Cup"]].map(([v, l]) => (
                <div key={l}>
                  <div className="fkf-stat-val">{v}</div>
                  <div className="fkf-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TICKER */}
        <Ticker />

        {/* MISSION */}
        <section className="fkf-section fkf-white">
          <div className="fkf-inner">
            <Reveal>
              <div className="fkf-2col fkf-2col-top">
                <div>
                  <span className="fkf-eyebrow">Our Mission</span>
                  <h2 className="fkf-h2">Every Athlete Deserves to Live a Strong, Long Life</h2>
                  <div className="fkf-mission-block">
                    <p>We believe all athletes living with special needs deserve to live healthy, confident, long and strong lives.</p>
                  </div>
                </div>
                <div>
                  <p className="fkf-body-text">Our mission is to <strong>improve life expectancy, daily independence and self-confidence</strong> of all Athletes through accessible, fun and results-driven fitness and health programs for everyone living with Special Needs — across Australia and eventually the world.</p>
                  <p className="fkf-body-text">We are the creators of the <strong>Strong Hearts Program</strong> — an All-Abilities Sport and Recreation program boosting cardiovascular health, motor skills, and making lasting friendships. We also host the <strong>Flying Kiwi Cup</strong>, a monument to success for Powerlifting Athletes with All Abilities.</p>
                  <ContactBanner />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="fkf-divider" />

        {/* PROGRAMS */}
        <section className="fkf-section fkf-tinted" id="programs">
          <div className="fkf-inner">
            <Reveal>
              <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto" }}>
                <span className="fkf-eyebrow">What We Offer</span>
                <h2 className="fkf-h2">Our Programs</h2>
                <p className="fkf-body-text">Accessible, fun and results-driven programs designed for every athlete.</p>
              </div>
            </Reveal>
            <div className="fkf-cards">
              {[
                { num: "01", title: "Flying Kiwi Coaching Program", badge: "Premium", bc: "b-purple", body: "Customised 1-on-1 coaching aligned to your NDIS plan goals. Multi-faceted — attacking from all angles in life to build capability, independence, and lasting confidence.", loc: "Goodlife Health Clubs, Chermside" },
                { num: "02", title: "Strong Hearts Program", badge: "Group Program", bc: "b-pink", body: "A fun, social group environment focused on cardiovascular health, motor skills, and making friends — all while not realising you're exercising!", loc: "Northside Indoor Sports, North Lakes" },
                { num: "03", title: "NDIS Support", badge: "Funded Access", bc: "b-teal", body: "We take a customised, multi-faceted approach to achieving the goals set out in your NDIS plan. We get to know you as a parent, carer and athlete inside and out.", loc: "Australia-wide" },
              ].map(({ num, title, badge, bc, body, loc }, i) => (
                <Reveal key={num} delay={i * 0.1}>
                  <div className="fkf-card">
                    <div className="fkf-card-num">{num}</div>
                    <div className="fkf-card-title">{title}</div>
                    <span className={`fkf-badge ${bc}`}>{badge}</span>
                    <div className="fkf-card-body">{body}</div>
                    <div className="fkf-card-footer">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {loc}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COACHING DETAIL */}
        <section className="fkf-section fkf-white">
          <div className="fkf-inner">
            <Reveal>
              <div className="fkf-2col">
                <div>
                  <span className="fkf-eyebrow">Coaching Program</span>
                  <h2 className="fkf-h2">Coaching for a More Capable, Independent &amp; Longer Life</h2>
                  <p className="fkf-pink-sub">Held at Goodlife Health Clubs, Chermside</p>
                  <p className="fkf-body-text">The perfect solution for goal-achieving, happiness and self-confidence boosting premium coaching support for Athletes with Special Needs. We take a customised approach to achieving goals set out in your NDIS plan — attacking from all angles in life!</p>
                  <p className="fkf-body-text">This 2 minutes and 25 seconds explains us pretty well 👇</p>
                  <ContactBanner />
                </div>
                <div>
                  <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flying Kiwi Coaching Program" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STRONG HEARTS */}
        <section className="fkf-section fkf-tinted">
          <div className="fkf-inner">
            <Reveal>
              <div className="fkf-2col">
                <div>
                  <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Strong Hearts Program" />
                </div>
                <div>
                  <span className="fkf-eyebrow">Strong Hearts Program</span>
                  <h2 className="fkf-h2">Special Needs Social Sport &amp; Recreation</h2>
                  <div className="fkf-location-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Northside Indoor Sports — 17 Flinders Parade, North Lakes
                  </div>
                  <p className="fkf-body-text">A fun, social and loving environment focused on Cardiovascular Health, Fine and Gross Motor Skills, and making friends — all while not realising you&apos;re exercising!</p>
                  <p className="fkf-body-text">We want to help athletes <strong>associate exercise with happiness</strong> — because if we achieve that, they will want to exercise for years to come because they enjoy it, not because it&apos;s a chore.</p>
                  <ContactBanner />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FLYING KIWI CUP */}
        <section className="fkf-section fkf-white">
          <div className="fkf-inner">
            <Reveal>
              <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                <span className="fkf-eyebrow">Bi-Annual Event</span>
                <h2 className="fkf-h2">The Flying Kiwi Cup</h2>
                <p className="fkf-pink-sub">The All-Abilities Powerlifting Meet with HUGE Crowds</p>
                <p className="fkf-body-text">Giving our athletes something to aim for is a large part of any human&apos;s progress! We hold our Flying Kiwi Cup <strong>twice a year</strong> to give athletes an opportunity to show their stuff on the platform in front of a big crowd — always a huge day of fun!</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="fkf-quote">
                <p>&ldquo;No Egos, just lifting with my friends&rdquo; 💙</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ marginTop: "1.5rem" }}>
                <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flying Kiwi Cup" />
              </div>
              <ContactBanner />
            </Reveal>
          </div>
        </section>

        {/* FORMAL */}
        <section className="fkf-section fkf-tinted">
          <div className="fkf-inner">
            <Reveal>
              <div className="fkf-2col">
                <div>
                  <span className="fkf-eyebrow">Annual Celebration</span>
                  <h2 className="fkf-h2">The Flying Kiwi Formal</h2>
                  <p className="fkf-pink-sub">The Celebration of Achievement for All Our Participants</p>
                  <p className="fkf-body-text">Once a year we all come together as a team with Support Workers, Parents, and Friends to acknowledge everything we have achieved in the last 12 months!</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fdf4ff", border: "1px solid #e9d4ff", padding: "0.6rem 1.1rem", borderRadius: "8px", marginBottom: "1.25rem", fontSize: "0.88rem", color: "#6c5ce7", fontWeight: 600 }}>
                    ✨ Flying Kiwi Athletes attend free as part of their membership
                  </div>
                  <p className="fkf-body-text">Check out the highlights from 2022 below 👇</p>
                  <ContactBanner />
                </div>
                <div>
                  <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flying Kiwi Formal 2022" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EVENTS GRID */}
        <section className="fkf-section fkf-white">
          <div className="fkf-inner">
            <Reveal>
              <div style={{ textAlign: "center", maxWidth: "540px", margin: "0 auto" }}>
                <span className="fkf-eyebrow">Community</span>
                <h2 className="fkf-h2">Events &amp; Milestones</h2>
              </div>
            </Reveal>
            <div className="fkf-event-cards">
              {[
                { emoji: "🏋️", title: "Flying Kiwi Cup", body: "Bi-annual powerlifting meet celebrating strength and achievement. Massive crowds, massive fun — no egos, just lifting with friends." },
                { emoji: "🎉", title: "Flying Kiwi Formal", body: "Annual celebration dinner with support workers, parents and friends. Athletes attend free — their achievement is the headline." },
                { emoji: "📺", title: "On Channel 9 Sunrise", body: "Flying Kiwi Fitness was featured on Channel 9's Sunrise — watch our incredible athletes share their story with Australia." },
                { emoji: "💪", title: "NDIS-Funded Programs", body: "All programs are structured to align with NDIS goals, making it straightforward to fund participation and track progress." },
              ].map(({ emoji, title, body }, i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <div className="fkf-event-card">
                    <div className="fkf-event-emoji">{emoji}</div>
                    <div className="fkf-event-title">{title}</div>
                    <div className="fkf-event-body">{body}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SUNRISE MEDIA */}
        <section className="fkf-section fkf-tinted">
          <div className="fkf-inner" style={{ maxWidth: "760px" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #e5e5e5", padding: "0.45rem 1.1rem", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 600, color: "#333", marginBottom: "1rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  As seen on Channel 9 Sunrise
                </div>
                <span className="fkf-eyebrow" style={{ display: "block" }}>Media</span>
                <h2 className="fkf-h2">Featured on Sunrise</h2>
                <p className="fkf-body-text">Flying Kiwi Athlete Talitha having a blast with Coach Michael! 🌟</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flying Kiwi on Channel 9 Sunrise" />
            </Reveal>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section style={{ padding: 0 }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "21/8", overflow: "hidden" }}>
            <Image src="/images/pic2.png" alt="Flying Kiwi Fitness Athletes" fill style={{ objectFit: "cover" }} priority />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(108,92,231,0.72) 0%, rgba(214,58,249,0.55) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
              <p style={{ fontWeight: 700, fontSize: "clamp(1.4rem, 4vw, 2.6rem)", color: "#fff", textAlign: "center", textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
                Making a Difference — One Athlete at a Time 💙
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fkf-cta" id="contact">
          <div className="fkf-cta-inner">
            <Reveal>
              <h2>Ready to Join the Flying Kiwi Family?</h2>
              <p>Leave your details and a member of our team will get in touch as soon as possible to help get on the way to a better life for your athlete — and you!</p>
              <a href="mailto:hello@flyingkiwifitness.com.au" className="fkf-cta-btn">Get in Touch Today</a>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="fkf-footer">
          <div className="fkf-footer-inner">
            <div className="fkf-footer-logo">Flying Kiwi Fitness</div>
            <div className="fkf-footer-copy">© 2024 Flying Kiwi Fitness — Empowering Athletes with Special Needs</div>
          </div>
        </footer>

      </div>
    </>
  );
};
  );
};
