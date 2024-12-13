import ExpectationsCard from "@/components/profile/Expectation";
import GoalsSection from "@/components/profile/Goals";
import Metric from "@/components/profile/Metric";
import ProfileSection from "@/components/profile/ProfileSection";
import WorkStream from "@/components/profile/WorkStream";
import LineChartGraph from "@/graphs/LineChart";
import React from "react";

const ProfilePage = () => {
	return (
		<section className='container '>
			<div className='grid grid-cols-2  w-full my-10 '>
				<div className='flex flex-col gap-4 items-center'>
					<ProfileSection />
					<ExpectationsCard />
					<WorkStream />
					<Metric />
				</div>
				<div className='flex flex-col gap-4 items-center'>
					<LineChartGraph />
					<GoalsSection />
					<GoalsSection />
				</div>
			</div>
		</section>
	);
};

export default ProfilePage;
