import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // React Icons

const plans = [
  {
    name: "Free Trial",
    price: "Free for 3 Days",
    description: "Experience premium features for 3 days.",
    features: ["2 Simultaneous Calls"],
    missingFeatures: [
      "Full Integration",
      "24/7 Support",
      "Regular Maintenance",
    ],
  },
  {
    name: "Starter Pack",
    price: "$199/month",
    description: "Perfect for growing teams.",
    features: ["20 Simultaneous Calls", "Full Integration"],
    missingFeatures: ["24/7 Support", "Regular Maintenance"],
    popular: true, // Highlight this plan
  },
  {
    name: "Enterprise Pack",
    price: "$499/month",
    description: "For businesses needing full support.",
    features: [
      "Up to 50 Simultaneous Calls",
      "Full Integration",
      "24/7 Support",
      "Regular Maintenance",
    ],
    missingFeatures: [],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-6">
          Choose the <span className="text-orange-500">Right Plan</span> for You
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Flexible plans that grow with your business. Upgrade anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg border ${
                plan.popular
                  ? "border-orange-500 bg-gray-900"
                  : "border-gray-700 bg-gray-800"
              } transition transform hover:scale-105`}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <span className="bg-orange-500 text-xs uppercase px-3 py-1 rounded-full text-white tracking-wider absolute -mt-4">
                  Most Popular
                </span>
              )}

              {/* Plan Name & Description */}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>

              {/* Pricing */}
              <p className="text-3xl font-extrabold text-orange-500">
                {plan.price}
                <span className="text-sm text-gray-400"></span>
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-green-400">
                    <FaCheckCircle className="mr-2" /> {feature}
                  </li>
                ))}

                {/* Missing Features (Unavailable Features) */}
                {plan.missingFeatures.length > 0 &&
                  plan.missingFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-500 line-through">
                      <FaTimesCircle className="mr-2" /> {feature}
                    </li>
                  ))}
              </ul>

              {/* Get Started Button */}
              <button className="mt-8 px-6 py-3 w-full font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
