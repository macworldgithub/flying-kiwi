"use client";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE - Contact Info + Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
          {/* Info Box */}
          <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 shadow-md">
            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Address
                </h3>
                <p className="text-gray-600">
                  Northside Indoor Sports & <br />
                  Goodlife Chermside
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-pink-100 rounded-full">
                <Phone className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                <p className="text-gray-600">Let’s Talk: 0410 257 561</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Email Address
                </h3>
                <p className="text-gray-600">info@flyingkiwi.com.au</p>
              </div>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="mt-12">
            <img
              src="/images/team/contact-image.jpeg"
              alt="Flying Kiwi"
              className="w-full h-[99vw] object-cover rounded-b-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Updated Contact Form */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Get In Touch With Us
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Thank you so much for thinking of us. We hope our passion for the
            athletes truly shows, and we can’t wait to help you out in whatever
            capacity that may be.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            As an NDIS Participant yourself, Parent, Support Worker, Plan
            Manager, or Support Coordinator, please send your details below and
            it will be sent directly to Michael and his Team. They will get back
            to you as soon as possible.
          </p>

          <form className="flex flex-col space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                First Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message * (How can we help / tell us about your athlete!)
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                How did you hear about us?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Referral from Parent",
                  "Referral From Allied Health",
                  "Referral from Another Provider",
                  "Referral From Support Worker",
                  "Referral from another Flying Kiwi Athlete",
                  "Seen a Facebook/Instagram Ad",
                  "Seen on TikTok",
                  "Seen on Facebook",
                  "Seen on Instagram",
                  "Seen at Brisbane Disability Connection Expo",
                  "Seen on YouTube",
                  "From other News Source",
                  "Found on Google Search",
                ].map((item, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input type="radio" name="heardFrom" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Submit
            </button>

            {/* Footer Text */}
            <p className="text-sm text-gray-700 leading-relaxed pt-2">
              A member of the team will get in touch as soon as possible to help
              get on the way to a better way of life for your NDIS participant –
              and you!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;