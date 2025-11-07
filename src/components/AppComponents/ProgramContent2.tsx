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
            Strong Hearts Program
          </h2>
          <p className="text-sm text-[#13AFF0] mb-4 ">
            📍 Northside Indoor Sports
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our cardiovascular health and strength training program designed to
            improve life expectancy and overall fitness for athletes with
            special needs.
          </p>

          <p className="font-semibold text-gray-900 mb-2">Key Features:</p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>✔ Cardiovascular exercise routines</li>
            <li>✔ Strength and conditioning training</li>
            <li>✔ Health monitoring and progress tracking</li>
            <li>✔ NDIS-aligned support</li>
            <li>✔ Qualified coaching staff</li>
          </ul>
        </div>
      </div>

      {/* SECOND ROW - FLYING KIWI COACHING */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-20">
        {/* LEFT CONTENT - Flying Kiwi Coaching */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Flying Kiwi Coaching
          </h2>
          <p className="text-sm text-[#13AFF0] mb-4 ">
            📍 Goodlife Health Clubs Chermside
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Personalized fitness coaching providing one-on-one and group
            training sessions tailored to individual needs and goals.
          </p>

          <p className="font-semibold text-gray-900 mb-2">Key Features:</p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>✔ Personalized training plans</li>
            <li>✔ Professional coaching support</li>
            <li>✔ Modern gym facilities</li>
            <li>✔ Flexible scheduling</li>
            <li>✔ Progress assessments</li>
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
