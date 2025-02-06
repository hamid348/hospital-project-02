'use client';

import React, { useState, useCallback } from 'react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

function FqaCard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Memoize the toggle function to prevent unnecessary re-renders
  const toggleAccordion = useCallback((index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  }, []);

  const faqData: FaqItem[] = [
    {
      question: "What is the cost of a taxi from Manchester Airport to Heathrow Airport?",
      answer: (
        <p className="text-gray-600 dark:text-gray-300">
          Our rates for Manchester Airport to Heathrow Airport transfers start from £X. The final cost depends on factors like vehicle type and specific requirements. Contact us for a precise quote.
        </p>
      )
    },
    {
      question: "What is the cancellation policy?",
      answer: (
        <p className="text-gray-600 dark:text-gray-300">
          We offer free cancellation up to 24 hours before your scheduled pickup. Cancellations within 24 hours may incur a fee. Please contact our customer service for details.
        </p>
      )
    },
    {
      question: "Do you offer child car seats?",
      answer: (
        <div className="text-gray-600 dark:text-gray-300">
          <p className="mb-2">Yes, we provide child car seats upon request:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Infant seats (0-12 months)</li>
            <li>Toddler seats (1-4 years)</li>
            <li>Booster seats (4+ years)</li>
          </ul>
          <p className="mt-2">Please request these when making your booking.</p>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-3xl mx-auto w-full px-4 md:px-6 py-4">
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div 
            key={`faq-${index}`} 
            className="border rounded-lg dark:border-gray-700 transition-colors duration-200"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 md:p-5 rtl:text-right text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="font-medium text-sm md:text-base pr-4">{faq.question}</span>
              <svg
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
            <div
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                activeIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-labelledby={`faq-${index}`}
            >
              <div className="p-4 md:p-5 border-t dark:border-gray-700">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FqaCard;