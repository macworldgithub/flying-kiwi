"use client";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE - Contact Info + Map */}
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

          {/* Map Image below content */}
          <div className="mt-6">
            <img
              src="/images/map.png"
              alt="Map"
              className="w-full h-64 object-cover rounded-b-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Get In Touch With Us
          </h2>

          <form className="flex flex-col space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                First name *
              </label>
              <input
                type="text"
                placeholder="Alex"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Last name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                E-mail *
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message *
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
