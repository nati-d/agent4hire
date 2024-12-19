import {Rocket, Settings2} from "lucide-react";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const CTA = () => {
	return (
		<section className='container py-8'>
			<div className='flex flex-col-reverse md:grid md:grid-cols-[70%_30%] gap-8 md:gap-4 items-center'>
				<div className='flex flex-col items-center md:items-start gap-4 max-w-[800px]'>
					<div className='py-2 px-4 border border-primary rounded-full w-max flex gap-4 items-center justify-center'>
						<div className='p-1 rounded-full border flex items-center justify-center border-primary bg-primary'>
							<Settings2 className='h-4 w-4 text-white-a0' />
						</div>
						<span className='text-sm'>Integration</span>
					</div>
					<h1 className='text-2xl md:text-[42px] font-semibold text-center md:text-left leading-[42px]'>
						Seamlessly Integrate AI Agents With Your <span className='text-primary'>Favorite Tools</span>
					</h1>
					<p className='text-[16px] text-center md:text-left'>
						Connect effortlessly with the platforms you use every day to maximize productivity and efficiency.
					</p>
					<CustomButton
						label='Integrate Now'
						additionalClass='gradient border rounded-full py-2 px-8 text-xs text-white-a0 w-max'
						icon={
							<div className='p-1 border border-white rounded-full'>
								<Rocket className='w-3 h-3 text-white-a0' />
							</div>
						}
					/>
				</div>
				<div className='relative w-full max-w-[300px] aspect-square'>
					<Image
						src='/images/cta_image.png'
						alt='cta'
						fill
						className='object-contain'
					/>
				</div>
			</div>
		</section>
	);
};

export default CTA;
