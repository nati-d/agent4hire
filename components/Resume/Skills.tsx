import React from "react";

interface SkillsProps {
	skills: string[];
}

const Skills: React.FC<SkillsProps> = ({skills}) => {
	console.log(skills, "skills");
	return (
		<div className='w-full mx-auto px-4'>
			<h1 className='font-bold text-[20px]'>Skills</h1>
			<div className='flex flex-wrap items-center mt-4 gap-4 '>
				{skills.map((skill, index) => (
					<div
						key={index}
						className=''
					>
						<p className='bg-purple-custom px-2 py-1 md:px-4 md:py-2 text-[10px] md:text-[12px] rounded-full border border-gray-600 text-gray-600'>{skill}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
