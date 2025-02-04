import React from 'react';
import WorkCard from './WorkCard';

function HowItWork() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 p-4 text-center">
        <p className="font-semibold text-lg text-gray-700">3 eenvoudige stappen</p>
        <h1 className="text-3xl font-bold text-gray-900">Hoe het werkt</h1>
        <p className="text-lg text-gray-600">
          Volg deze eenvoudige stappen om uw taxi of busje in slechts enkele notulen te boeken.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <WorkCard
          step="1"
          color="bg-blue-500"
          title="Kies uw bestemming"
          description="Kies uw bestemming en selecteer het type voertuig dat u wilt boeken."
          buttonlink="Read More"
        />
        <WorkCard
          step="2"
          color="bg-green-500"
          title="Kies uw bestemming"
          description="Kies uw bestemming en selecteer het type voertuig dat u wilt boeken."
          buttonlink="Read More"
        />
        <WorkCard
          step="3"
          color="bg-yellow-500"
          title="Kies uw bestemming"
          description="Kies uw bestemming en selecteer het type voertuig dat u wilt boeken."
          buttonlink="Read More"
        />
      </div>
    </div>
  );
}

export default HowItWork;
