import React, {ReactNode} from "react";

interface TimelineSectionProps {
	children: ReactNode;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({children}) => {
	return (
		<div className='mb-8 flex items-start relative '>
			{/* Dot at the center of the vertical bar */}
			<div className='hidden absolute left-3 z-10 md:flex items-center justify-center w-2 h-2 bg-white rounded-full bg-blue-900 shrink-0'></div>
			<div className='flex flex-col w-full md:ml-10 '>{children}</div>
		</div>
	);
};

export default TimelineSection;
