import {Check, Sparkle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

interface PricingTier {
	name: string;
	description: string;
	price: string;
	features: string[];
	buttonText: string;
	// buttonVariant: "default" | "outline" ;
	popular?: boolean;
}

interface PricingCardProps {
	tier: PricingTier;
}

export function SubscriptionCard({name, description, price, features, buttonText, popular}: PricingTier) {
	return (
		<div className={`flex flex-col bg-transparent  rounded-md p-[24px] h-max ${popular ? "border border-primary " : "border border-b-0 border-[#4423E633]"}`}>
			<div>
				<div className='flex items-center justify-between'>
					<h3 className='text-[18px] font-bold'>{name}</h3>
					{popular && (
						<div className='text-[10px] flex items-center gap-2 bg-[#4423E60D] border border-primary rounded-full px-2 font-semibold'>
							<Sparkle className='w-2 h-2 text-primary' />
							Most-Popular
						</div>
					)}
				</div>
				<p className='text-[14px] text-muted-foreground '>{description}</p>
				<p className='text-[28px] font-bold mt-[16px]'>{price}</p>
			</div>
			<div className='flex-1 mt-[24px]'>
				<Button
					variant={name === "Pro" ? "default" : "outline"} 
					className={`w-full ${name === "Pro" ? "gradient text-white-a0" : "bg-transparent border border-primary"}`}
					size='lg'
				>
					{buttonText}
				</Button>
				<ul className='space-y-4 mt-4'>
					{features.map((feature, index) => (
						<li
							key={index}
							className='flex items-center gap-2'
						>
							<Check className='h-4 w-4 text-primary' />
							<span className='text-[14px]'>{feature}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
