import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function ProfileSection() {
	return (
		<Card className='w-full max-w-md mx-auto'>
			<CardHeader className='flex flex-col items-center space-y-4'>
				<Avatar className='w-24 h-24'>
					<AvatarImage
						src='https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=600'
						alt='Profile picture'
					/>
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
				<CardTitle className='text-2xl font-bold'>HR Assistant</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='text-center text-muted-foreground'>Enthusiastic and creative problem-solver with a passion for technology and innovation.</div>
				<div className='flex flex-wrap justify-center gap-2'>
					<Badge variant='secondary'>Creative</Badge>
					<Badge variant='secondary'>Tech-savvy</Badge>
					<Badge variant='secondary'>Team player</Badge>
					<Badge variant='secondary'>Adaptable</Badge>
					<Badge variant='secondary'>Quick learner</Badge>
				</div>
			</CardContent>
		</Card>
	);
}
