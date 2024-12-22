"use client";

import {useState, useEffect} from "react";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWork from "@/components/HowItWork";
import FeaturedAgents from "@/components/FeaturedAgents";
import CTA from "@/components/CTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import SubscriptionPlan from "@/components/SubscriptionPlan";
import FAQ from "@/components/FAQ";
import CustomButton from "@/components/CustomButton";



export default function Home() {

	return (
		<section className='w-full h-full'>
			<Hero />
			{/* <AnalysisSection />
      <FeaturedAgents /> */}
			<div className='bg-white-a0 w-full py-12'>
				<FeaturesSection />
			</div>
			<div className='light-gradient w-full py-12'>
				<HowItWork />
			</div>
			<div className='bg-white-a0 w-full py-12'>
				<FeaturedAgents />
			</div>
			<div className='light-gradient w-full py-12'>
				<CTA />
			</div>
			<div className='bg-white-a0 w-full py-12'>
				<TestimonialsSection />
			</div>
			<div className='light-gradient w-full py-12'>
				<SubscriptionPlan />
			</div>
			<div className='bg-white-a0 w-full py-12'>
				<FAQ />
			</div>
			<div className='bg-white-a0 py-8'>
				<div className="container flex flex-col items-center justify-center gap-4">
					<h1 className="text-[24px] font-[500]">Still Have Questions?</h1>
					<p className="text-[16px]">Feel free to reach out to us for any further assistance.</p>
						<CustomButton
							label='Contact Us'
							additionalClass='bg-white-a0 border-[1.5px] border-primary rounded-md py-[12px] px-[24px] font-[500] text-[18px]'
						/>
				</div>
			</div>
		</section>
	);
}
