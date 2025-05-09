import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Seamless Integration",
      description: "We integrate all your current systems with AI.",
      image: "/42301916530a75fe575782261c97b403.jpg",
    },
    {
      id: 2,
      title: "Automate Your Call Flow",
      description: "AI-driven automation streamlines your workflow.",
      image: "/6a192b049fdae9b0ef25f319b4e176ad.jpg",
    },
    {
      id: 3,
      title: "Post Call Data in One Click",
      description: "Instant access to analyzed post-call insights.",
      image: "/614ffae8e5d3d0c9894cbc05be2831e8.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* <span className="text-orange-500 text-sm font-semibold uppercase bg-orange-100 px-3 py-1 rounded-full">
          How it works
        </span> */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 text-center">
  How Our &nbsp;
  <span className="bg-gray-200 px-3 sm:px-4 py-1 rounded-full border text-black">
    NeuroBit AI
  </span> Works
</h2>
        <p className="text-gray-600 mt-2">
          Our AI process is simple, fast, and delivers amazing results in just a few easy steps.
        </p>
      </div>

      {/* Steps Container */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative flex h-[25rem] w-full max-w-lg flex-col items-end justify-end overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${step.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative text-center p-6 text-white">
              {/* <span className="text-orange-400 font-bold">Step {step.id}</span> */}
              <h3 className="text-2xl font-semibold mt-2">{step.title}</h3>
              <p className="text-gray-300 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
