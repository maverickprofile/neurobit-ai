import React from "react";

const features = [
  {
    id: 1,
    title: "Advanced Human-Like Voice Assistants",
    description:
      "Neurobit AI Voice Assistants are designed with human-like precision and adaptability, trained on your unique data for seamless integration. Powered by advanced AI, they manage a wide range of business tasks — from handling inbound queries and making outbound calls to scheduling appointments — all with 24/7 reliability. Elevate your communication workflow with AI that never sleeps.",
    image: "./dd9ddab14a6c86e9469c620fdd00cbae.jpg",
    reverse: false,
  },
  {
    id: 2,
    title: "Versatile Voice Options",
    description:
      "Neurobit AI offers a rich selection of human-like voices, allowing you to find the perfect tone that reflects your brand’s identity. For a truly personalized experience, you can even clone your own voice. Our diverse voice options are crafted to resonate with your audience, boosting engagement and delivering more meaningful interactions every time.",
    image: "./bac24cb1ec63c0c17c1f5b7a2627ec01.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "Seamless Integration for Optimized Workflow",
    description:
      "At Neurobit AI, we prioritize seamless integration to keep your operations running smoothly. Our AI solutions are built to effortlessly connect with your existing systems and CRMs, ensuring a streamlined transition without disrupting workflows. This deep integration empowers our AI Voice Assistants to work in sync with your processes, boosting overall efficiency and productivity.",
    image: "/7b641aff5ca4637d7e678bc621ddde61.jpg",
    reverse: false,
  },
  {
    id: 4,
    title: "AI Chatbot Integration – Smart Support",
    description:
      "Enhance your website with our intelligent AI Chatbot integration. Built to engage visitors, handle inquiries, and automate conversations 24/7, this chatbot connects seamlessly with your backend workflows—including n8n, CRMs, and databases. Deliver instant support and elevate user experience without the overhead of live agents.",
    image: "https://i.pinimg.com/736x/47/4c/f3/474cf3b31e3f2f08863030d1dfa9f4ff.jpg", // replace with your actual image path
    reverse: true,
  },  
];

const MoreFeatures = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">More Features</h2>

        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${
              feature.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Text Content */}
            <div className="md:w-1/2 w-full text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreFeatures;
