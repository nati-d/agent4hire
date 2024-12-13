import React from "react";
import CustomButton from "../CustomButton";

const CTA = () => {
	return (
		<div className='bg-primary-300 w-full h-full flex flex-col justify-around px-8 items-start font-medium rounded-md'>
			<div className='bg-white-a0 text-xs py-1 px-2 rounded-3xl'>New</div>
			<h1 className='text-white-a20 font-semibold text-[20px] leading-0'> Your Personal Data Scientist, Now Just a Click Away!</h1>
			<p className='text-white-a30 font-light text-[14px]'>
				Discover actionable insights with intuitive charts, seamless dashboards, and AI-driven recommendations
			</p>
			<CustomButton
				label='Check Now'
				additionalClass='bg-white-a0 text-text-100 rounded-md text-[12px] w-full font-semibold flex items-center justify-center py-4 hover:opacity-80'
			/>
		</div>
	);
};

export default CTA;
