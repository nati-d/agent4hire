import React from "react";
import AgentCard from "./AgentCard";
import {AGENTS, FEATURED_AGENTS} from "@/utils/constants";
import {List} from "lucide-react";

const agent = AGENTS[0];

function FeaturedAgents() {
	return (
		<section className='container flex flex-col items-center '>
			<div className='flex flex-col items-center'>
				<div className='py-2 px-4 b-1 border-primary rounded-full w-max flex border gap-4 items-center justify-center '>
					<div className='p-1 rounded-full border flex items-center justify-center border-primary bg-primary'>
						<List className='h-4 w-4 text-white-a0 ' />
					</div>
					<span className='text-[14px]'>Agents</span>
				</div>
				<h1 className='text-[32px] font-semibold'>
					Featured <span className='text-primary'>Agents</span>
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
				{FEATURED_AGENTS.slice(0, 4).map((agent, index) => (
					<AgentCard
						key={index}
						role={agent.title}
						userPersona={agent.description}
						availableApis={[]}
						rating={4}
					/>
				))}
			</div>
		</section>
	);
}

export default FeaturedAgents;
