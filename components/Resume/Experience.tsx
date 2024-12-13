import React from "react";
import ExperienceCard from "./ExperienceCard";

interface ExperienceItem {
	position: string;
	startDate: string;
	endDate: string;
	workDescription: string;
}

interface ExperiencesProps {
	experiences: ExperienceItem[];
}

const Experience: React.FC<ExperiencesProps> = ({experiences}) => {
	return (
		<div className='w-[100%] mx-auto px-4'>
			<h1 className='font-bold text-[20px]'>Expectations</h1>
			<div className='space-y-4 sm:space-y-6 md:space-y-8'>
				{experiences &&
					experiences.map((experience, index) => (
						<ExperienceCard
							key={index}
							experience={experience}
							isFirst={index === 0}
						/>
					))}
			</div>
		</div>
	);
};

export default Experience;
