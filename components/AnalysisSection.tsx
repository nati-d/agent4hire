import Image from "next/image";
import React from "react";

const AnalysisSection = () => {
	return (
		<div className='container bg-red-600 relative h-[80dvh]'>
			<Image
				src='/images/analysis-image.png'
				fill
				alt='Analysis Image'
			/>
		</div>
	);
};

export default AnalysisSection;
