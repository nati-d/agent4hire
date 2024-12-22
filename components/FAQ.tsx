import {FileQuestion} from "lucide-react";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";


const faqItems = [
	{
	  question: "What features are included in the subscription plans?",
	  answer: "Our subscription plans include a range of features such as advanced analytics dashboards, real-time usage reports, performance insights, and seamless integration with third-party tools. Please refer to the pricing section for detailed information about each plan."
	},
	{
	  question: "Can I switch between plans?",
	  answer: "Yes, you can upgrade or downgrade your subscription plan at any time. Changes to your plan will take effect at the start of your next billing cycle."
	},
	{
	  question: "Is there a free trial available?",
	  answer: "Yes, we offer a 14-day free trial for all subscription plans. This allows you to explore the platform and its features before committing to a paid plan."
	},
	{
	  question: "How secure is the platform?",
	  answer: "We take security very seriously. Our platform is built with state-of-the-art encryption protocols, secure authentication methods, and regular security audits to ensure the safety and privacy of your data."
	},
	{
	  question: "What kind of support is provided?",
	  answer: "We provide 24/7 customer support via email and chat. Premium subscribers also receive priority support with dedicated account managers for more personalized assistance."
	}
  ]

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
			<div className="max-w-[1200px] mx-auto mt-4 p-8 rounded-lg bg-[#4423E60D]">
				<div className='bg-white-a0 p-4 rounded-lg'>
				<Accordion type="single" collapsible className="w-full p-[64px]">
          {faqItems.map((item, index) => (
            <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`} className="px-[24px] py-[8px]">
              <AccordionTrigger className="text-[18px] font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[16px]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
