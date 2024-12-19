import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import {Play, Rocket} from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import FeaturesSection from "./FeaturesSection";

const Hero = () => {
	return (
		<section className=' flex relative  justify-center items-center mb-4  w-full px-4  py-32'>
			<Image
				src='/images/hero.png'
				alt='Hero Image'
				fill
			/>
			<div className='z-10  container space-y-32 px-[100px]'>
				<div className='max-w-[1000px] mx-auto'>
					<h1 className='text-[64px] font-bold text-center leading-[1.2] max-md:text-4xl max-md:leading-[1.3]'>
						Transforming Your Workflow With <span className='gradient-text'>Smart AI Agents</span>
					</h1>
					<p className='mt-8 text-[16px] font-[400] leading-relaxed text-center max-w-[1000px] mx-auto'>
						Discover intelligent solutions tailored to simplify tasks, enhance productivity, and meet your unique needs.{" "}
					</p>
					<div className='flex justify-center gap-3 mt-10 w-full '>
						<CustomButton
							label='Get Started'
							icon={
								<div className='p-0.5 bg-gray-400 rounded-full'>
									<div className='p-1 bg-white-a0 rounded-full'>
										<Rocket className='w-3 h-3 text-primary' />
									</div>
								</div>
							}
							additionalClass='bg-primary text-white-a0 rounded-full py-[16px] px-[24px] text-[24px]'
						/>
						{/* <div className='gradient p-1 rounded-full flex items-center justify-center'> */}
							<CustomButton
								label='See How It Works'
								additionalClass='bg-white-a0 border  border-primary rounded-full py-3 px-6 text-[24px]'
							/>
						{/* </div> */}
					</div>
				</div>
				<VideoPlayer />
			</div>
		</section>
	);
};

export default Hero;
