import React from "react";
import TimePicker from "./TimePicker";

function HeroForm() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-300 rounded-lg shadow-md">
      <form className="flex flex-col gap-6">
        {/* Category Selection (Ziekenhuis or Algemeen) */}
        <div className="flex w-full justify-between bg-gray-200 p-2 rounded-full">
          <button className="bg-blue-400 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-blue-500">
            Ziekenhuis
          </button>
          <button className="px-4 py-2 rounded-full focus:outline-none hover:bg-gray-300">
            Algemeen
          </button>
        </div>

        {/* "Van" Section */}
        <div className="mb-5">
          <h1 className="text-xl font-bold text-gray-900">Bereken uw prijs</h1>
          <p className="text-sm text-gray-600">Boek van tevoren of contact voor elke vraag.</p>

          <label
            htmlFor="van"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Van
          </label>
          <select
            id="countries"
            className="w-full p-2.5 bg-gray-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Kies een land</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        {/* "Naar" Section */}
        <div className="mb-5">
          <label
            htmlFor="naar"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Naar
          </label>
          <input
            type="text"
            id="naar"
            placeholder="Adres"
            className="w-full p-2.5 bg-gray-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        {/* Time Picker Section */}
       
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-400 text-white py-3 rounded-lg font-medium text-sm hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HeroForm;
