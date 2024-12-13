import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
	title: string;
	shortDescription: string;
	demoName: string;
}

interface ProjectsProps {
	projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({projects}) => {
	return (
		<div className='w-[100%] mx-auto px-4'>
			<h1 className='font-bold text-[20px]'>Latest Projects</h1>
			<div className='mt-2 grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
				{projects &&
					projects.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
						/>
					))}
			</div>
		</div>
	);
};

export default Projects;
