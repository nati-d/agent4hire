import React from "react";

interface ExperienceItem {
  position: string;
  startDate: string;
  endDate: string;
  workDescription: string;
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  isFirst: boolean; // Indicates if this is the first experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isFirst }) => {
  return (
    <div
      className={`p-4 rounded-md border w-[100%] ${
        isFirst ? "light-gradient border-l-4 border-l-primary" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-[14px] md:text-[16px] font-semibold">{experience.position}</h1>
        <span className="text-[10px] md:text-[12px] italic text-gray-400">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
      <p className="text-[12px] md:text-[14px] text-gray-500">{experience.workDescription}</p>
    </div>
  );
};

export default ExperienceCard;
