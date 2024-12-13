import React from "react";
import CustomButton from "./CustomButton";
import AgentCard from "./AgentCard";
import {FEATURED_AGENTS} from "@/utils/constants";
import {Grid} from "lucide-react";

const AgentListing = () => {
	return (
		<section className='w-full py-32'>
			<div className='container flex flex-col items-center space-y-8'>
				<div className='p-1 bg-background-200  rounded-full'>
					<CustomButton
						label='Agent Listing'
						additionalClass=' bg-white-a0 rounded-full border border-gray-300 cursor-default w-max text-[12px]'
						icon={<Grid className='h-4 w-4 text-primary-100 ' />}
					/>
				</div>
				<h1 className='text-3xl font-semibold'>Discover Your AI Solutions</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 w-full'>
					{FEATURED_AGENTS.slice(0, 8).map((agent) => (
						<AgentCard
							key={agent.id}
							{...agent}
						/>
					))}
				</div>
				<CustomButton
					label='Load More'
					additionalClass=' bg-white-a0 rounded-full px-5 border border-gray-300 text-[10px]   w-max'
				/>
			</div>
		</section>
	);
};

export default AgentListing;
