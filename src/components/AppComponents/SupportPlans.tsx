// export default function SupportPlans() {
//   const plans = [
//     {
//       title: "Basic Plan",
//       price: "$25",
//       per: "/month",
//       data: "5GB",
//       network: "4G",
//     },
//     {
//       title: "Standard Plan",
//       price: "$24.60",
//       per: "/month",
//       data: "10GB",
//       network: "4G",
//       highlight: true,
//     },
//     {
//       title: "Premium Plan",
//       price: "$28.53",
//       per: "/month",
//       data: "15GB",
//       network: "4G",
//     },
//     {
//       title: "Elite Plan",
//       price: "$33.24",
//       per: "/month",
//       data: "20GB",
//       network: "5G",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 bg-white text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//         Choose Your Plan
//       </h2>
//       <p className="text-gray-500 mb-12 text-sm md:text-base">
//         All plans powered by JUSTmobile.ai with a portion supporting Flying Kiwi
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {plans.map((plan, i) => (
//           <div
//             key={i}
//             className={`rounded-2xl p-6 flex flex-col items-center shadow-sm transition hover:shadow-md ${
//               plan.highlight
//                 ? "bg-gradient-to-b from-indigo-50 to-white border-2 border-indigo-500"
//                 : "bg-gray-50 border border-gray-200"
//             }`}
//           >
//             <p className="text-sm text-pink-500 font-semibold mb-1">3.5GB</p>
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">
//               {plan.title}
//             </h3>
//             <p className="text-3xl font-bold text-gray-900">
//               {plan.price}
//               <span className="text-base text-gray-500 font-normal">
//                 {plan.per}
//               </span>
//             </p>

//             <button
//               className={`mt-4 mb-6 w-full py-2 rounded-xl font-medium transition ${
//                 plan.highlight
//                   ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               Choose This Plan
//             </button>

//             <div className="text-left w-full text-gray-700 text-sm">
//               <p className="font-semibold mb-2">Features include:</p>
//               <ul className="space-y-1">
//                 <li>✔ Unlimited standard calls.</li>
//                 <li>✔ Unlimited SMS to Australian Numbers.</li>
//                 <li>✔ {plan.network} Network Access</li>
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Plan {
  _id: string;
  planName: string;
  price: number;
  network: string;
  isActive: boolean;
}

export default function SupportPlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "https://bele.omnisuiteai.com/api/v1/plans"
        );
        if (!response.ok) throw new Error("Failed to fetch plans");
        const data = await response.json();
        setPlans(data.data || []);
      } catch (err) {
        console.error("Error fetching plans:", err);
        setError("Unable to load plans. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleClick = (planName: string) => {
    const encodedTitle = encodeURIComponent(planName);
    router.push(`/chat-window?plan=${encodedTitle}`);
  };

  if (loading)
    return (
      <div className="text-center text-gray-600 py-20 bg-white">
        Loading plans...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 py-20 bg-white">{error}</div>
    );

  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Choose Your Plan
      </h2>
      <p className="text-gray-500 mb-12 text-sm md:text-base">
        All plans powered by JUSTmobile.ai with a portion supporting Flying Kiwi
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, i) => {
          const dataMatch = plan.planName.match(/(\d+GB)/i);
          const dataAmount = dataMatch ? dataMatch[0] : "N/A";

          return (
            <div
              key={plan._id}
              className={`rounded-2xl p-6 flex flex-col items-center shadow-sm transition hover:shadow-md ${
                plan.network === "5G"
                  ? "bg-gradient-to-b from-indigo-50 to-white border-2 border-indigo-200"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <p className="text-sm text-pink-500 font-semibold mb-1">
                {dataAmount}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {plan.planName}
              </h3>
              <p className="text-3xl font-bold text-gray-900">
                ${plan.price.toFixed(2)}
                <span className="text-base text-gray-500 font-normal">
                  /month
                </span>
              </p>

              <button
                onClick={() => handleClick(plan.planName)}
                className={`mt-4 mb-6 w-full py-2 rounded-xl font-medium transition ${
                  plan.network === "5G"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Choose This Plan
              </button>

              <div className="text-left w-full text-gray-700 text-sm">
                <p className="font-semibold mb-2">Features include:</p>
                <ul className="space-y-1">
                  <li>✔ Unlimited standard calls.</li>
                  <li>✔ Unlimited SMS to Australian Numbers.</li>
                  <li>✔ {plan.network} Network Access</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
