import React from "react";
import CustomButton from "./CustomButton";
import {PawPrint} from "lucide-react";
import {FEATURES} from "@/utils/constants";
import FeaturedCard from "./FeaturedCard";

interface Feature {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const features = [
	{name: "Feature One", description: "Feature description for the first card goes here."},
	{name: "Feature Two", description: "Seamlessly connect with platforms like Slack, Trello, CRM systems, or APIs for enhanced workflows."},
	{name: "Feature Three", description: "Feature description for the third card goes here."},
	{name: "Feature Four", description: "Feature description for the fourth card goes here."},
	{name: "Feature Five", description: "Feature description for the fifth card goes here."},
];

const FeatureCards = () => {
	return (
		<div className='flex items-center justify-center flex-wrap gap-8 mt-8'>
			{features.map((feature, index) => (
				<div
					key={index}
					className={`flex flex-col items-center justify-center border border-primary rounded-lg p-8 gap-3 w-[350px] ${
						index === 1 ? "col-span-2 md:col-span-1 lg:col-span-1" : ""
					}`}
				>
					<PawPrint className='h-12 w-12 text-primary' />
					<h1 className='text-center font-semibold text-[20px]'>{feature.name}</h1>
					<p className='text-center text-[12px]'>{feature.description}</p>
				</div>
			))}
		</div>
	);
};

export default FeatureCards;
