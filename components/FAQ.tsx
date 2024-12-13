import {FileQuestion} from "lucide-react";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const FAQ = () => {
	return (
		<section className='container'>
			<div className='flex flex-col items-center justify-center'>
				<div className='py-2 px-4 b-1 border-primary rounded-full w-max flex border gap-4 items-center justify-center'>
					<div className='p-1 rounded-full border flex items-center justify-center border-primary bg-primary'>
						<FileQuestion className='h-4 w-4 text-white-a0' />
					</div>
					<span className='text-[14px]'>FAQ</span>
				</div>
				<h1 className='text-[32px] font-semibold mb-8'>
					Frequently <span className='text-primary'>Asked</span> Questions
				</h1>
			</div>
			<div className="max-w-[800px] mx-auto mt-4 p-4 rounded-lg bg-[#4423E60D]">
				<div className='bg-white-a0 p-4 rounded-lg'>
					<Accordion
						type='multiple'
						// collapsible
						className='w-full'
					>
						<AccordionItem value='item-1'>
							<AccordionTrigger>What features are included in the subscription plans?</AccordionTrigger>
							<AccordionContent>
								Our subscription plans include a range of features such as advanced analytics dashboards, real-time usage reports, performance
								insights, and seamless integration with third-party tools. Please refer to the pricing section for detailed information about
								each plan.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>Can I switch between plans?</AccordionTrigger>
							<AccordionContent>
								Yes, you can upgrade or downgrade your subscription plan at any time. Changes to your plan will take effect at the start of your
								next billing cycle.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>Is there a free trial available?</AccordionTrigger>
							<AccordionContent>
								Yes, we offer a 14-day free trial for all subscription plans. This allows you to explore the platform and its features before
								committing to a paid plan.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-4'>
							<AccordionTrigger>How secure is the platform?</AccordionTrigger>
							<AccordionContent>
								We take security very seriously. Our platform is built with state-of-the-art encryption protocols, secure authentication
								methods, and regular security audits to ensure the safety and privacy of your data.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-5'>
							<AccordionTrigger>What kind of support is provided?</AccordionTrigger>
							<AccordionContent>
								We provide 24/7 customer support via email and chat. Premium subscribers also receive priority support with dedicated account
								managers for more personalized assistance.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-6'>
							<AccordionTrigger>Are there any hidden fees?</AccordionTrigger>
							<AccordionContent>
								No, there are no hidden fees. The pricing structure is transparent, and all charges are clearly outlined in the subscription
								details.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-7'>
							<AccordionTrigger>What happens if I cancel my subscription?</AccordionTrigger>
							<AccordionContent>
								If you cancel your subscription, you will retain access to your account and features until the end of the current billing cycle.
								Afterward, access to premium features will be disabled.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
