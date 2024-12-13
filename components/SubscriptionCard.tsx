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
		<Card className={`flex flex-col ${popular ? "border-primary shadow-lg" : ""}`}>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<h3 className='text-[20px] font-bold'>{name}</h3>
					{popular && (
						<div className='text-[10px] flex items-center gap-2 bg-[#4423E60D] border border-primary rounded-full px-2 font-semibold'>
							<Sparkle className='w-2 h-2 text-primary' />
							Most-Popular
						</div>
					)}
				</div>
				<p className='text-[12px] text-muted-foreground'>{description}</p>
				<p className='text-[28px] font-bold'>{price}</p>
			</CardHeader>
			<CardContent className='flex-1'>
				<Button
					variant={name === "Pro" ? "default" : "outline"} // Conditional variant
					className='w-full'
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
			</CardContent>
		</Card>
	);
}
