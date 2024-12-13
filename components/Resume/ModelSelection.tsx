import React from "react";

interface ModelSectionItems {
	name: string;
}

interface ModelSectionProps {
	models: ModelSectionItems[];
}

const ModelSection: React.FC<ModelSectionProps> = ({models}) => {
	return (
		<div className='w-full mx-auto px-4'>
			<h1 className='font-bold text-[20px]'>Model</h1>
			<div className='flex items-center mt-4 gap-4 flex-wrap'>
				{models.map((item, index) => (
					<div
						key={index}
						className=''
					>
						<p className='bg-purple-custom text-[10px] py-1 px-2 md:px-4 md:py-2 md:text-[12px] rounded-md border border-gray-600 text-gray-600'>{item.name}</p>
						{/* <p className='text-[12px] text-gray-500 '>{item.reward}</p> */}
					</div>
				))}
			</div>
		</div>
	);
};

export default ModelSection;
