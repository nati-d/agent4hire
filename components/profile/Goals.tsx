import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Edit2, CheckCircle, PaintBucket} from "lucide-react";

interface Goal {
	id: string;
	title: string;
	progress: number;
}

interface GoalCardProps {
	name: string;
	avatarUrl: string;
	shortTermGoals: Goal[];
	longTermGoals: Goal[];
}

function Goals({shortTermGoals, longTermGoals}: GoalCardProps) {
	return (
		// <Card className='w-full max-w-2xl'>
		// 	<CardHeader className='flex flex-row items-center gap-4'>
		// 		<div>
		// 			<CardTitle className='text-2xl'>Goals</CardTitle>
		// 			{/* <p className="text-sm text-muted-foreground">Track your progress and achieve your dreams</p> */}
		// 		</div>
		// 	</CardHeader>
		<div className='w-[100%] mx-auto px-4'>
			<h1 className='font-bold text-[20px]'>Goals</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
				<GoalSection
					title='Short-term Goals'
					goals={shortTermGoals}
				/>
				<GoalSection
					title='Long-term Goals'
					goals={longTermGoals}
				/>
			</div>
		</div>
	);
}

function GoalSection({title, goals}: {title: string; goals: Goal[]}) {
	return (
		<div className='space-y-4'>
			<div className='flex gap-2 items-center mt-2'>
				<PaintBucket className='w-4 h-4 text-primary' />

				<span className='text-primary font-semibold text-[14px]'>{title}</span>
			</div>
			<div className='space-y-2 '>
				{goals.map((goal, index) => (
					<div className={`p-2 md:p-4 rounded-md border w-[100%] border-l-4 border-l-purple-custom light-gradient`}>
						<div className='flex justify-between items-center'></div>
						<p className='text-[12px] md:text-[14px] text-gray-500'>{goal.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default function GoalsSection() {
	const userData = {
		name: "Jane Doe",
		avatarUrl: "/placeholder.svg?height=100&width=100",
		shortTermGoals: [
			{id: "1", title: "Complete current project", progress: 75},
			{id: "2", title: "Learn a new programming language", progress: 30},
			{id: "3", title: "Improve time management skills", progress: 50},
		],
		longTermGoals: [
			{id: "4", title: "Get promoted to senior position", progress: 60},
			{id: "5", title: "Start a tech blog", progress: 20},
			{id: "6", title: "Contribute to open-source projects", progress: 40},
		],
	};

	return (
		<div className='flex items-center justify-center w-full '>
			<Goals {...userData} />
		</div>
	);
}
