import React from "react";
import CustomButton from "./CustomButton";
import {PawPrint} from "lucide-react";
import {FEATURES} from "@/utils/constants";
import FeaturedCard from "./FeaturedCard";
import FeatureCards from "./FeaturedCard";

interface Feature {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const FeaturesSection: React.FC = () => {
	return (
		<div className='container flex flex-col items-center '>
			<div className='flex flex-col items-center'>
				<div className='py-2 px-4 b-1 border-primary rounded-full w-max flex border gap-4 items-center justify-center '>
					<div className='p-1 rounded-full border flex items-center justify-center border-primary bg-primary'>
						<PawPrint className='h-4 w-4 text-white-a0 ' />
					</div>
					<span className='text-[14px]'>Features</span>
				</div>
				<h1 className='text-[32px] font-semibold'>
					What We <span className='text-primary'>Offer?</span>
				</h1>
			</div>
			<FeatureCards />
		</div>
	);
};

export default FeaturesSection;
