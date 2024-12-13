import React from "react";

import {AreaChartGraph} from "@/graphs/AreaChart";
import TimelineSection from "./TimelineSection";
import Experience from "../Resume/Experience";
import Skills from "../Resume/Skills";
import ModelSection from "../Resume/ModelSelection";
import Projects from "../Resume/Projects";
import Expectation from "../profile/Expectation";
import WorkStream from "../profile/WorkStream";
import GoalsSection from "../profile/Goals";

interface ExperienceItem {
	position: string;
	startDate: string;
	endDate: string;
	workDescription: string;
}

interface EducationItem {
	type: string;
	reward: string;
}

interface Project {
	title: string;
	shortDescription: string;
	demoName: string;
}

interface Agent {
	experiences: ExperienceItem[];
	coreAbilities: string[];
	education: EducationItem[];
	projects: Project[];
}

interface Model {
	name: string;
}

interface TimelineProps {
	agent: Agent;
	type: string;
}

const Timeline: React.FC<TimelineProps> = ({type, agent}) => {
	const models: Model[] = [{name: "GPT"}, {name: "Gemini AI"}, {name: "LLM"}, {name: "ChatGPT"}];

	return type === "resume" ? (
		<div className='relative max-w-[1200px]  mx-auto md:px-6 py-10 w-full '>
			<div className='hidden md:block absolute md:left-9 top-0 h-full w-[2px] gradient'></div>

			<TimelineSection>
				<Experience experiences={agent.experiences} />
			</TimelineSection>

			<TimelineSection>
				<Skills skills={agent.coreAbilities} />
			</TimelineSection>

			<TimelineSection>
				<ModelSection models={models} />
			</TimelineSection>

			<TimelineSection>
				<AreaChartGraph />
			</TimelineSection>

			<TimelineSection>
				<Projects projects={agent.projects} />
			</TimelineSection>
		</div>
	) : (
		<div className='relative max-w-[1200px] mx-auto md:px-6 py-10 w-full'>
			<div className='hidden md:block absolute left-9 top-0 h-full w-[2px] gradient'></div>

			<TimelineSection>
				<Expectation />
			</TimelineSection>

			<TimelineSection>
				<WorkStream />
			</TimelineSection>

			<TimelineSection>
				<GoalsSection />
			</TimelineSection>
		</div>
	);
};

export default Timeline;
