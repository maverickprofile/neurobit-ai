import React from "react";
import Marquee from "react-fast-marquee";

import {
  FaPhoneAlt,
  FaClock,
  FaCalendarCheck,
  FaHandshake,
  FaClipboardList,
  FaUtensils,
  FaTruck,
  FaMoneyBillWave,
  FaUserTie,
} from "react-icons/fa";

const featuresList = [
  { icon: <FaClock />, text: "After Hours Phone Answering" },
  { icon: <FaPhoneAlt />, text: "No More Holds Or Queues" },
  { icon: <FaCalendarCheck />, text: "Taking Bookings" },
  { icon: <FaHandshake />, text: "Outbound B2B Sales Calls" },
  { icon: <FaClipboardList />, text: "Setting Appointments" },
  { icon: <FaCalendarCheck />, text: "Appointment Reminders" },
  { icon: <FaUserTie />, text: "Qualifying Leads" },
  { icon: <FaTruck />, text: "Handling Transport Timetable Queries" },
  { icon: <FaUtensils />, text: "Booking Restaurant Tables" },
  { icon: <FaUtensils />, text: "Taking Take-away Food Orders" },
  { icon: <FaMoneyBillWave />, text: "Accounts Payable Or Receivable" },
  { icon: <FaUserTie />, text: "Virtual PA" },
];

const Features = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 py-10 md:px-6 lg:px-8 bg-white" id="features">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black">
  <span className="bg-gray-200 px-3 py-1 rounded-md text-black inline-block">
    Seamlessly automate <br className="block md:hidden" /> customer interactions
  </span>
</h2>

      <h3 className="text-2xl md:text-3xl font-semibold mt-4 text-black">
      with AI-driven plug-and-play agents.
      </h3>
      <p className="text-gray-500 mt-4 max-w-2xl text-sm md:text-base">
      Transform routine transactions into intelligent, AI-powered conversations that boost customer engagement across industries and functions.
      </p>

      {/* Marquee Feature List */}
      <div className="mt-10 w-full space-y-6">
        {/* First Row - Left to Right */}
        <Marquee gradient={false} speed={40} className="mb-4">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="mx-3 px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border border-gray-200 flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base"
            >
              <span className="text-gray-600 text-lg md:text-xl">{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </Marquee>
        {/* Second Row - Right to Left */}
        <Marquee gradient={false} speed={40} direction="right">
          {featuresList.reverse().map((feature, index) => (
            <div
              key={index}
              className="mx-3 px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border border-gray-200 flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base"
            >
              <span className="text-gray-600 text-lg md:text-xl">{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Features;