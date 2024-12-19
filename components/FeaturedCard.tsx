import React from "react";
import CustomButton from "./CustomButton";
import {PawPrint} from "lucide-react";
import {FEATURES} from "@/utils/constants";
import FeaturedCard from "./FeaturedCard";

interface Feature {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const features = [
	{name: "Customizable AI Assistants", description: "Allows users to design AI assistants tailored to their team roles and goals."},
	{name: "Hierarchical Framework", description: "Structures AI assistants by team, agent, goal, sub-goal, and workstream for optimized task alignment."},
	{name: "Pre-built AI Assistants", description: "Offers ready-to-use assistants with preconfigured goals and metrics for rapid deployment."},
	{name: "Performance Tracking and Feedback", description: "Monitors AI assistant effectiveness with real-time metrics and user feedback loops."},
	{name: "Dynamic API Integration", description: "Employs a hierarchical structure for selecting and integrating APIs to match task requirements efficiently."},
];

const FeatureCards = () => {
	return (
		<div className='flex items-center justify-center flex-wrap gap-8 mt-8'>
			{features.map((feature, index) => (
				<div
					key={index}
					className={`flex flex-col items-center justify-center py-[24px] px-[12px] border border-primary bg-[#4423E605] rounded-lg p-8 gap-3  max-w-[334px] ${
						index === 1 ? "py-[32px]" : ""
					}`}
				>
					<PawPrint className='h-12 w-12 text-primary' />
					<h1 className='text-center font-[600] text-[22px]'>{feature.name}</h1>
					<p className='text-center text-[14px]'>{feature.description}</p>
				</div>
			))}
		</div>
	);
};

export default FeatureCards;
