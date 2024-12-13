import React from "react";
import LanguageCard from "./LanguageCard";

type LanguageItem = {
	flag: React.ReactNode;
	language: string;
	level: string;
};

type LanguageDataProps = {
    languageData: LanguageItem[];
};

const Languages = ({languageData}: LanguageDataProps) => {
	return (
		<div>
			<h1 className='font-semibold text-[14px] mb-2'>Languages</h1>
			<div className='flex flex-col  gap-2 px-2'>
				{languageData.map((lang, idx) => (
					<LanguageCard
						key={idx}
						flag={lang.flag}
						language={lang.language}
						level={lang.level}
					/>
				))}
			</div>
		</div>
	);
};

export default Languages;
