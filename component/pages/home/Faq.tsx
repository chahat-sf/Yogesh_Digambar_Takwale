"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you execute both government and private projects?",
    answer:
      "Yes. We have strong experience in competitive tenders and private developments. Yogesh Digambar Takwale",
  },
  {
    question: "Can you strengthen or retrofit old structures?",
    answer:
      "Absolutely—retrofitting and structural strengthening are core capabilities. Yogesh Digambar Takwale",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes. We provide recurring maintenance for roads and buildings. Yogesh Digambar Takwale",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-4 sm:p-6 cursor-pointer overflow-hidden"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-2xl font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
