import React from "react";
import CustomButton from "./CustomButton";
import {Sparkle} from "lucide-react";
import {FEATURED_AGENTS} from "@/utils/constants";
import AgentCard from "./AgentCard";

const RecommendSection = () => {
	return (
		<section className='bg-white-a0 w-full py-32'>
			<div className='container flex flex-col items-center space-y-8'>
				<div className='p-1 bg-background-200  rounded-full'>
					<CustomButton
						label='Best Agent'
						additionalClass=' bg-white-a0 rounded-full border border-gray-300 cursor-default w-max text-[12px]'
						icon={<Sparkle className='h-4 w-4 text-primary-100 ' />}
					/>
				</div>

				<h1 className='text-3xl font-semibold'>Recommendation</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 w-full'>
					{FEATURED_AGENTS.slice(0, 4).map((agent) => (
						<AgentCard
							key={agent.id}
							{...agent}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default RecommendSection;
