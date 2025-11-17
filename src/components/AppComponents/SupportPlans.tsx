"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/reduxStore";
import { fetchCustomerServices } from "@/app/api/service";
import { Text } from "../UIComponents/Text";
import { Heading } from "../UIComponents/Heading";
import { Button } from "../UIComponents/Button";

interface Plan {
  _id: string;
  planName: string;
  price: number;
  network: string;
  isActive: boolean;
}

interface ServiceDetail {
  planName: string;
  [key: string]: any;
}

export default function SupportPlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [services, setServices] = useState<ServiceDetail[]>([]);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result: any = await dispatch(fetchCustomerServices());
        if (result.payload?.data?.services?.serviceDetails) {
          setServices(result.payload.data.services.serviceDetails);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };

    fetchServices();
  }, [dispatch]);

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

  const handleChangePlan = () => {
    router.push("/change-plan");
  };

  if (loading)
    return (
      <div className="text-center text-gray-600 py-20 bg-white">
        <Text>Loading plans...</Text>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 py-20 bg-white">
        <Text variant="highlight">{error}</Text>
      </div>
    );

  return (
    <section className="py-20 px-4 bg-white text-center">
      <Heading
        title="Choose Your Plan"
        subtitle="All plans powered by JUSTmobile.ai with a portion supporting Flying Kiwi"
        align="center"
        level={2}
      />
      {services.length > 0 && (
        <div className="my-6 flex justify-center">
          <Button variant="gradient" size="md" onClick={handleChangePlan}>
            Change Your Plan
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => {
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
              <Text variant="highlight" className="mb-1">
                {dataAmount}
              </Text>

              <Text className="text-lg font-semibold text-gray-800 mb-2">
                {plan.planName}
              </Text>

              <Text className="text-3xl font-bold text-gray-900">
                ${plan.price.toFixed(2)}
                <span className="text-base text-gray-500 font-normal">
                  /month
                </span>
              </Text>

              <Button
                onClick={() => handleClick(plan.planName)}
                variant={plan.network === "5G" ? "gradient" : "outline"}
                size="md"
                fullWidth
                className="mt-4 mb-6"
              >
                Choose This Plan
              </Button>

              <div className="text-left w-full">
                <Text className="font-semibold mb-2">Features include:</Text>
                <ul className="space-y-1">
                  <li>
                    <Text>✔ Unlimited standard calls.</Text>
                  </li>
                  <li>
                    <Text>✔ Unlimited SMS to Australian Numbers.</Text>
                  </li>
                  <li>
                    <Text>✔ {plan.network} Network Access</Text>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
