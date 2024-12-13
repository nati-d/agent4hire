import {Link2Off} from "lucide-react";
import Link from "next/link";
import React from "react";

interface Project {
	title: string;
	shortDescription: string;
	demoName: string;
}

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
	return (
		<div className='p-4 rounded-md border w-[100%] h-full light-gradient'>
			<h1 className='text-[16px] font-semibold'>{project.title}</h1>
			<p className='text-[14px] text-gray-500'>{project.shortDescription}</p>
			<Link
				href='/'
				className='flex gap-2 items-center mt-4'
			>
				<div className='p-1 bg-background-200 rounded-full'>
					<Link2Off className='w-2 h-2 text-primary' />
				</div>
				<span className='text-[10px] text-primary'>{project.demoName}</span>
			</Link>
		</div>
	);
};

export default ProjectCard;
