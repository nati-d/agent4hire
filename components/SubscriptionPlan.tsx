import {DollarSignIcon} from "lucide-react";
import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {PRICING_TIERS} from "@/utils/constants";
import {SubscriptionCard} from "./SubscriptionCard";

const SubscriptionPlan = () => {
	return (
		<section className='container'>
			<div className='flex flex-col items-center justify-center mb-[24px]'>
				<div className='py-2 px-4 b-1 border-primary rounded-full w-max flex border gap-4 items-center justify-center '>
					<div className='p-1 rounded-full border flex items-center justify-center border-primary bg-primary'>
						<DollarSignIcon className='h-4 w-4 text-white-a0 ' />
					</div>
					<span className='text-[14px]'>Pricing</span>
				</div>
				<h1 className='text-[32px] font-semibold mb-8'>
					Subscription <span className='text-primary'>Plan</span>
				</h1>
				<Tabs
					defaultValue='monthly'
					className='w-max '
				>
					<TabsList className='border border-primary py-[32px]  px-[24px] rounded-full'>
						<TabsTrigger
							value='monthly'
							className='rounded-full px-[24px] py-[8px] font-[500] text-[16px] text-black data-[state=active]:bg-primary data-[state=active]:text-white-a0'
						>
							Monthly
						</TabsTrigger>
						<TabsTrigger
							value='annual'
							className='rounded-full flex gap-2 px-[24px] py-[8px] font-[500] text-[16px] items-center text-black data-[state=active]:bg-primary data-[state=active]:text-white-a0'
						>
							Annual <span className='py-[6px] px-[12px] bg-[#4423E60D] border-[0.5px] border-primary  text-[10px] rounded-full '>20% Off</span>
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4'>
				{PRICING_TIERS.map((tier) => (
					<SubscriptionCard
						key={tier.name}
						name = {tier.name}
                        description = {tier.description}
                        price = {tier.price}
                        features = {tier.features}
                        buttonText = {tier.buttonText}
                        popular = {tier.popular}
					/>
				))}
			</div>{" "}
		</section>
	);
};

export default SubscriptionPlan;
