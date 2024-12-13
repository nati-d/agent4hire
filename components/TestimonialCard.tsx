import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";

interface TestimonialCardProps {
	name: string;
	role: string;
	image: string;
	quote: string;
}

export function TestimonialCard({name, role, image, quote}: TestimonialCardProps) {
	return (
		<Card className='embla__slide border border-primary rounded-lg overflow-hidden relative'>
			<CardContent className='p-6'>
				<div className='flex flex-col items-start gap-4'>
					<div className='flex items-center gap-4'>
						<Avatar>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div>
							<h3 className='text-lg gradient-text font-semibold'>{name}</h3>
							<p className='text-sm text-gray-600'>{role}</p>
						</div>
					</div>
					<hr className='w-full border border-gray-400' />
					<blockquote className='text-gray-500 text-[14px]'>"{quote}"</blockquote>
				</div>
			</CardContent>
		</Card>
	);
}
