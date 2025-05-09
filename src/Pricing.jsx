import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const plans = [
  {
    name: "AI Chatbot Integration",
    price: "$999",
    description:
      "Smart AI Chatbot built into your website with seamless backend integration.",
    features: [
      "Real-time Website Chat Integration",
      "n8n & CRM Workflow Support",
      "24/7 Automated Response Handling",
      "Custom Conversation Flows",
      "One-Time Setup & Configuration",
    ],
    missingFeatures: [],
  },
  {
    name: "Enterprise Pack",
    price: "Custom",
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
  return (
    <section className="py-20 bg-black text-white" id="pricing">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Choose the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#686DF7] via-[#14A1F0] to-[#4D7EF5]">
            Right Plan
          </span>{" "}
          for You
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Flexible plans that grow with your business. Upgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full p-8 rounded-2xl bg-[#121214] border border-[#2D2D2D] shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <FaCheckCircle className="mt-0.5 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                  {plan.missingFeatures.length > 0 &&
                    plan.missingFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-600 line-through"
                      >
                        <FaTimesCircle className="mt-0.5 mr-2 text-gray-600" />
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>

              <a href="#register" className="mt-8">
                <button className="w-full py-3 font-medium bg-[#1F1F1F] text-white rounded-lg border border-gray-700 hover:bg-[#2A2A2A] transition duration-300">
                  Get Started
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
