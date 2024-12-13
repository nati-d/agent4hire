import React, {ReactNode} from "react";

interface LanguageCardProps {
	flag: ReactNode;
	language: string;
	level: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({flag, language, level}) => (
	<div className='flex items-center gap-2'>
		<div>{flag}</div>
		<div className='flex flex-col gap-y-0.5'>
			<p className='text-[12px] tracking-wider'>{language}</p>
			<p className='text-gray-600 text-[10px]'>{level}</p>
		</div>
	</div>
);

export default LanguageCard;
