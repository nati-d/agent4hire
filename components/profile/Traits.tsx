import React from "react";

const traits = [
  "Empathy",
  "Compassion",
  "Patience",
  "Resilience",
  "Creativity",
  "Adaptability",
  "Optimism",
  "Curiosity",
];

const Traits = () => {
  return (
    <div>
      <h1 className="font-semibold text-[14px] mb-2">Traits</h1>
      <div className="flex flex-wrap gap-2 px-2">
        {traits.map((trait, index) => (
          <div
            key={index}
            className="bg-white-a0 px-4 py-1 text-[12px] rounded-full border border-primary text-gray-600"
          >
            {trait}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traits;
