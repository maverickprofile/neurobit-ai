import React from "react";

const features = [
  {
    id: 1,
    title: "Advanced Human-Like Voice Assistants",
    description:
      "Our AI Voice Assistants exemplify human-like precision and can be rapidly tailored using your specific data. Leveraging sophisticated technology, they adeptly handle a multitude of business operations. Whether initiating outbound calls, managing incoming inquiries, or orchestrating appointment schedules, our assistants function tirelessly 24/7 to ensure your business communications are seamless and effective.",
    image: "./dd9ddab14a6c86e9469c620fdd00cbae.jpg",
    reverse: false,
  },
  {
    id: 2,
    title: "Versatile Voice Options",
    description:
      "Choose from an extensive array of human-like voices to find the perfect match for your brand’s identity, or create an even more personalized touch by cloning your own voice. Our diverse voice options are designed to cater to the unique needs of your clientele, enhancing user engagement and satisfaction with every interaction.",
    image: "./bac24cb1ec63c0c17c1f5b7a2627ec01.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "Seamless Integration for Optimized Workflow",
    description:
      "At Aitoflo, we understand the importance of seamless integration in maintaining smooth operational flows. Our AI solutions are designed to integrate effortlessly with your existing systems and CRMs, ensuring that transitions are fluid and that your business processes flow without interruption. This integration enables a harmonious workflow, allowing your AI Voice Assistants to synchronize with your operations and deliver enhanced productivity and efficiency.",
    image: "/7b641aff5ca4637d7e678bc621ddde61.jpg",
    reverse: false,
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
