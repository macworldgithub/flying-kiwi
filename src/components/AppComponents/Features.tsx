import { Button } from "../UIComponents/Button";

// components/Features.tsx
export default function Features() {
  return (
    <section className="bg-gradient-to-b from-pink-100 to-white py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Features</h2>
        <p className="text-gray-500 mb-10">How it works</p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-left md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Our AI will walk you through the setup:
            </h3>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li> Choose Your Plan</li>
              <li> Switch Your SIM</li>
              <li> Activate Service</li>
              <li> Make an Impact</li>
            </ul>
            <p className="space-y-3 text-gray-700 mb-4">
              Just have your ID ready, and existing customer number, if you are
              transfering your number and let’s go!
            </p>
            <Button
              variant="gradient"
              size="lg"
            >
              Get your e-SIM
            </Button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/mobile.png"
              alt="App demo"
              className="w-64 md:w-80 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
