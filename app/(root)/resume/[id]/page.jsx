"use client";
import ProfileCard from "@/components/Resume/ProfileCard";
import InfoCard from "@/components/Resume/InfoCard";
import LanguageCard from "@/components/Resume/LanguageCard";
import Timeline from "@/components/Resume/Timeline";
import {AGENTS} from "@/utils/constants";
import CustomButton from "@/components/CustomButton";

const ResumePage = ({params}) => {
	const {id} = params;
	const agent = AGENTS.find((agent) => agent.id === id);

	if (!agent) {
		return (
			<div className='container mx-auto p-4 text-center'>
				<h1 className='text-2xl font-bold'>Agent Not Found</h1>
				<p>We couldn&apos;t find any agent with the provided ID.</p>
			</div>
		);
	}
	return (
		<section
			className='container grid justify-between  py-10 '
			style={{gridTemplateColumns: "28% 70%"}}
		>
			<div className='w-full bg-white-a0 p-4 my-4 rounded-sm'>
				<ProfileCard
					image={agent.profileData.image}
					name={agent.profileData.name}
					tagline={agent.profileData.tagline}
					rating={agent.profileData.rating}
				/>

				<div className='flex flex-col gap-4'>
					{agent.infoData.map((info) => (
						<InfoCard
							key={info.type}
							type={info.type}
							label={info.label}
							value={info.value}
						/>
					))}
				</div>

				<hr className='border-gray-300 my-8' />

				<div>
					<p className='text-gray-600 text-[10px] mb-4'>Languages</p>
					<div className='space-y-2'>
						{agent.languageData.map((lang, idx) => (
							<LanguageCard
								key={idx}
								flag={lang.flag}
								language={lang.language}
								level={lang.level}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='flex flex-col w-full bg-white-a0 p-4 my-4 rounded-sm'>
				<Timeline agent={agent} />
				<div className='flex justify-end w-full gap-4 px-4'>
					<CustomButton
						label='Use Agent'
						additionalClass='bg-background-200 text-black rounded-full text-[12px] hover:bg-background-300'
					/>
					<CustomButton
						label='Customize Agent'
						additionalClass='bg-primary-100 text-white-a0 rounded-full text-[12px] hover:bg-primary-200'
					/>
				</div>
			</div>
		</section>
	);
};

export default ResumePage;
