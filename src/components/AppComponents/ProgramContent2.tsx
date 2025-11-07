export default function ProgramContent2() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE - Strong Hearts */}
        <div className="flex justify-center">
          <img
            src="/images/pic3.png"
            alt="Strong Hearts Program"
            className="rounded-2xl shadow-md w-full max-w-md object-cover"
          />
        </div>

        {/* RIGHT CONTENT - Strong Hearts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Flying Kiwi Cup
          </h2>
          <p className="text-sm text-[#13AFF0] mb-4 ">
            📍 Various Competition Venues
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Annual powerlifting competition celebrating the achievements of
            athletes with special needs, fostering confidence and community.
          </p>

          <p className="font-semibold text-gray-900 mb-2">Key Features:</p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>✔ Competitive powerlifting events</li>
            <li>✔ Awards and recognition</li>
            <li>✔ Supportive competition environment</li>
            <li>✔ Family and community participation</li>
            <li>✔ Annual championship event</li>
          </ul>
        </div>
      </div>

      {/* SECOND ROW - FLYING KIWI COACHING */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-20">
        {/* LEFT CONTENT - Flying Kiwi Coaching */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Flying Kiwi Formal
          </h2>
          <p className="text-sm text-[#13AFF0] mb-4 ">
            📍 Special Event Venues
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Annual formal social event providing athletes with the opportunity
            to dress up, socialize, and celebrate in an inclusive environment.
          </p>

          <p className="font-semibold text-gray-900 mb-2">Key Features:</p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>✔ Elegant formal setting</li>
            <li>✔ Music and dancing</li>
            <li>✔ Catered dining</li>
            <li>✔ Photo opportunities</li>
            <li>✔ Inclusive social experience</li>
          </ul>
        </div>

        {/* RIGHT IMAGE - Flying Kiwi */}
        <div className="flex justify-center">
          <img
            src="/images/pic4.png"
            alt="Flying Kiwi Coaching"
            className="rounded-2xl shadow-md w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
