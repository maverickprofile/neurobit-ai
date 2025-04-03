import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 3 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time. Once canceled, you will retain access until the end of your billing cycle.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can customize your invoice details by adding business details, VAT, or other necessary information.",
  },
  {
    question: "How does billing work?",
    answer: "Billing is done on a monthly or yearly basis, and you will receive an invoice for each payment.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can update your email address in your account settings under the profile section.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900 flex justify-center">
      <div className="max-w-3xl w-full">
        <h3 className="text-blue-500 text-center font-semibold uppercase">FAQs</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-2 mb-8">Everything You Need to Know</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 text-left font-medium text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FiMinus className="text-gray-600" />
                ) : (
                  <FiPlus className="text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 text-sm pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
