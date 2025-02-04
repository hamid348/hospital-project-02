import React from 'react';

interface WorkCardProps {
  step: string;
  title: string;
  description: string;
  buttonlink: string;
  color: string;
}

function WorkCard({ step, title, description, buttonlink, color }: WorkCardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-lg">
      {/* Step Section */}
      <div
        className={`text-2xl font-bold ${color} w-12 h-12 flex items-center justify-center rounded-full text-white`}
      >
        {step}
      </div>

      {/* Title & Description */}
      <div className="mt-4">
        <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-4 text-gray-700 dark:text-gray-400">{description}</p>
      </div>

      {/* Button Section */}
      <a
        href={buttonlink}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all"
        aria-label={`Go to ${title}`} // Accessibility improvement
      >
        {buttonlink}
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}

export default WorkCard;
