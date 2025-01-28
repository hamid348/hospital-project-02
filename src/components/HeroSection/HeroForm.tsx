import React from "react";
import TimePicker from "./TimePicker";

function HeroForm() {
  return (
    <div>
      <form className="max-w-sm mx-auto py-8">
        <div className="flex w-1/2 mx-auto justify-between bg-gray-200 p-2 rounded-full">
          <button className="bg-blue-600 text-white px-2 rounded-full">Ziekenhuis</button>
          <button>Algemeen</button>
        </div>
        {/* form part */}

        <div className="mb-5">
          <h1>Bereken uw prijs</h1>
          <p>Boek van tevoren of contact voor elke vraag.</p>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Van
          </label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="Naar"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Naar
          </label>
          <input
            type="text"
            id="naar"
            placeholder="adres"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />

        </div>
        <div className="flex items-center justify-between">
          <TimePicker />
          <option value="">
            
          </option>

        </div>
        
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HeroForm;
