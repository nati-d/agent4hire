import {Sparkle, User, Settings, CheckCircle} from "lucide-react";
import React from "react";
import VideoPlayer from "./VideoPlayer";

const HowItWork = () => {
	return (
		<section className='container mx-auto py-12'>
			<div className='flex flex-col items-center text-center'>
				{/* Section Header */}
				<div className='py-2 px-4 border border-primary rounded-full w-max flex gap-4 items-center'>
					<div className='p-1 rounded-full border border-primary bg-primary'>
						<Sparkle className='h-4 w-4 text-white-a0' />
					</div>
					<span className='text-[14px] text-primary font-semibold'>Demo</span>
				</div>
				<h1 className='text-[32px] font-bold mt-4'>
					How It <span className='text-primary'>Works</span>?
				</h1>
				<p className='text-gray-600 text-[14px] mt-2'>Discover how our solution streamlines your workflows in just three simple steps.</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-8 items-center justify-center'>
				{/* Video Section */}
				<VideoPlayer />

				{/* Steps Section */}
				<div className='flex flex-col gap-8 justify-center items-center'>
					{/* Step 1 */}
					<div className='flex items-center gap-6 border border-primary py-6 px-4 rounded-3xl max-w-md'>
						<div className='gradient p-1 rounded-full'>
							<div className='bg-white-a0 px-4 py-2 rounded-full'>
								<User className='h-6 w-6 text-primary' />
							</div>
						</div>
						<div>
							<h2 className='text-[16px] font-semibold'>Step One: Define the Agent via Chat</h2>
							<p className='text-[14px] text-gray-600 mt-2'>
							Users provide detailed descriptions of their desired AI assistant through an interactive chat interface.							</p>
						</div>
					</div>

					{/* Step 2 */}
					<div className='flex items-center gap-6 border border-primary py-6 px-4 rounded-3xl max-w-md'>
						<div className='gradient p-1 rounded-full'>
							<div className='bg-white-a0 px-4 py-2 rounded-full'>
								<Settings className='h-6 w-6 text-primary' />
							</div>
						</div>
						<div>
							<h2 className='text-[16px] font-semibold'>Step Two: Schedule Task Durations</h2>
							<p className='text-[14px] text-gray-600 mt-2'>
							Users set specific timeframes and schedules for the tasks they want the assistant to perform.
							</p>
						</div>
					</div>

					{/* Step 3 */}
					<div className='flex items-center gap-6 border border-primary py-6 px-4 rounded-3xl max-w-md'>
						<div className='gradient p-1 rounded-full'>
							<div className='bg-white-a0 px-4 py-2 rounded-full'>
								<CheckCircle className='h-6 w-6 text-primary' />
							</div>
						</div>
						<div>
							<h2 className='text-[16px] font-semibold'>Step Three: Select Pre-built Agents</h2>
							<p className='text-[14px] text-gray-600 mt-2'>
							If users prefer simplicity, they can choose from pre-configured agents tailored to common needs, avoiding the customization process.							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWork;
