import React from "react";

const Tags = () => {
	return (
		<div>
			<h1 className='font-semibold text-[14px] mb-2'>Tags</h1>
			<div className='flex flex-wrap  gap-2 px-2'>
				<div className='bg-white-a0 px-4 py-1 text-[12px] rounded-full border border-primary text-gray-600'>Task-Automation</div>
				<div className='bg-white-a0 px-4 py-1 text-[12px] rounded-full border border-primary text-gray-600'>Adaptive</div>
				<div className='bg-white-a0 px-4 py-1 text-[12px] rounded-full border border-primary text-gray-600'>Personalized-Support</div>
				<div className='bg-white-a0 px-4 py-1 text-[12px] rounded-full border border-primary text-gray-600'>Productive Boost</div>
			</div>
		</div>
	);
};

export default Tags;
