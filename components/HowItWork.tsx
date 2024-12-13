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

			<div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-8'>
				{/* Video Section */}
				<VideoPlayer />

				{/* Steps Section */}
				<div className='flex flex-col gap-12 justify-center items-center'>
					{/* Step 1 */}
					<div className='flex items-center gap-6 border border-primary py-6 px-4 rounded-3xl max-w-md'>
						<div className='gradient p-1 rounded-full'>
							<div className='bg-white-a0 px-4 py-2 rounded-full'>
								<User className='h-6 w-6 text-primary' />
							</div>
						</div>
						<div>
							<h2 className='text-[20px] font-semibold'>Step One: Create an Account</h2>
							<p className='text-[14px] text-gray-600 mt-2'>
								Sign up and create your profile in minutes. Start by entering your basic information and preferences.
							</p>
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
							<h2 className='text-[20px] font-semibold'>Step Two: Customize Your Workflow</h2>
							<p className='text-[14px] text-gray-600 mt-2'>
								Set up integrations with tools like Slack, Trello, or Google Workspace to enhance productivity.
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
							<h2 className='text-[20px] font-semibold'>Step Three: Achieve Your Goals</h2>
							<p className='text-[14px] text-gray-600 mt-2'>
								Start using the platform to manage tasks, track progress, and achieve results more effectively.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWork;
