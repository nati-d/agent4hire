import React from "react";



const Traits = ({ traits }: { traits: string[] }) => {
  return (
    <div>
      <h1 className="font-semibold text-[14px] mb-2">Traits</h1>
      <div className="flex flex-wrap gap-2">
        {traits && traits.length > 0 ? (
          traits.map((trait, index) => (
            <div
              key={index}
              className="bg-[#4423E60D] px-[8px] py-[4px] text-[12px] font-[400] rounded-full"
            >
              {trait}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-[12px]">No traits available</p>
        )}
      </div>
    </div>
  );
};

export default Traits;
