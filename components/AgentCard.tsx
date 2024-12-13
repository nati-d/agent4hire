import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";
import CustomButton from "./CustomButton";
import {Bookmark, Check, Edit, Eye, MoveRight, PanelRightClose, Rocket, RocketIcon, Star, X, XCircle} from "lucide-react";
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import ProfileHeader from "./Shared/ProfileHeader";
import Timeline from "./Shared/Timeline";
import IntegratedApps from "./Shared/IntegratedApps";
import Languages from "./Resume/Languages";
import Tags from "./Resume/Tags";
import Traits from "./profile/Traits";

const agent = {
	id: "A001",
	profileData: {
		image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
		name: "Sophia Carter",
		tagline: "Expert in Data-Driven Marketing Strategies",
		rating: 4.8,
	},
	infoData: [
		{type: "email", label: "Email", value: "sophia.carter@agency.com"},
		{type: "website", label: "Website", value: "https://sophiacarter.ai"},
		{type: "phone", label: "Phone", value: "+1 555-123-4567"},
		{type: "address", label: "Address", value: "Digital Workspace"},
	],
	languageData: [
		{flag: "🇬🇧", language: "English", level: "Native"},
		{flag: "🇫🇷", language: "French", level: "Fluent"},
		{flag: "🇩🇪", language: "German", level: "Intermediate"},
	],
	experiences: [
		{
			position: "Marketing Specialist",
			company: "BrandMatrix",
			workDescription: "Increased brand engagement by 40% through targeted campaigns.",
			startDate: "2019-03-15",
			endDate: "2023-02-28",
		},
		{
			position: "Content Strategist",
			company: "Creative Edge",
			workDescription: "Developed multimedia content strategies for Fortune 500 clients.",
			startDate: "2016-07-01",
			endDate: "2019-02-28",
		},
	],
	coreAbilities: ["Campaign Management", "SEO Optimization", "Content Creation", "Performance Analytics"],
	education: [
		{
			type: "Degree",
			reward: "Master's in Marketing Analytics, Harvard University",
			date: "2016",
		},
		{
			type: "Certification",
			reward: "Google Analytics Professional Certificate",
			date: "2020",
		},
	],
	tasksCompleted: [
		{month: "January", tasks: 35},
		{month: "February", tasks: 50},
		{month: "March", tasks: 44},
		{month: "April", tasks: 28},
		{month: "May", tasks: 45},
		{month: "June", tasks: 38},
		{month: "July", tasks: 55},
		{month: "August", tasks: 60},
	],
	projects: [
		{
			title: "Task Tracker",
			shortDescription: "A real-time task completion tracker for Agent A's tasks over the last 8 months.",
			demoName: "TaskTrackerDemo",
		},
		{
			title: "Analytics Dashboard",
			shortDescription: "An advanced dashboard displaying Agent A's task completion metrics and trends.",
			demoName: "AnalyticsDashboardDemo",
		},
	],
	visualizations: [
		{
			type: "table",
			id: "agent_summary",
			title: "Agent Performance Summary",
			data: {
				columns: ["Task", "Status", "Completion Time (hrs)", "Priority"],
				rows: [
					["Prepare Report", "Completed", 2.5, "High"],
					["Team Meeting", "Completed", 1.0, "Medium"],
					["Update System", "Pending", null, "High"],
					["Review Proposals", "Completed", 3.0, "Medium"],
					["Plan Strategy", "Pending", null, "Low"],
				],
			},
		},
		{
			type: "pie_chart",
			id: "completion_status",
			title: "Task Completion Status for Agent A",
			data: {
				values: [
					{label: "Completed", value: 60},
					{label: "Pending", value: 40},
				],
			},
		},
		{
			type: "bar_chart",
			id: "time_spent",
			title: "Time Spent on Tasks by Agent A",
			data: {
				x_axis: "Task",
				y_axis: "Hours",
				values: [
					{task: "Prepare Report", hours: 2.5},
					{task: "Team Meeting", hours: 1.0},
					{task: "Update System", hours: 0},
					{task: "Review Proposals", hours: 3.0},
					{task: "Plan Strategy", hours: 0},
				],
			},
		},
		{
			type: "line_chart",
			id: "task_completion_trends",
			title: "Task Completion Trends for Agent A",
			data: {
				x_axis: "Days",
				y_axis: "Tasks Completed",
				values: [
					{day: "Monday", tasks_completed: 2},
					{day: "Tuesday", tasks_completed: 1},
					{day: "Wednesday", tasks_completed: 1},
					{day: "Thursday", tasks_completed: 0},
					{day: "Friday", tasks_completed: 1},
				],
			},
		},
		{
			type: "stacked_bar_chart",
			id: "priority_distribution",
			title: "Task Distribution by Priority for Agent A",
			data: {
				x_axis: "Priority",
				y_axis: "Number of Tasks",
				values: [
					{priority: "High", completed: 1, pending: 1},
					{priority: "Medium", completed: 2, pending: 0},
					{priority: "Low", completed: 0, pending: 1},
				],
			},
		},
	],
};

interface AgentCardProps {
	role: string;
	userPersona: string;
	availableApis: string[];
}

interface AgentCardProps {
	role: string;
	userPersona: string;
	availableApis: string[];
	rating: number;
	tags?: string[];
	price?: string;
	onHireNow?: () => void;
	onPreview?: () => void;
}

const AgentCard: React.FC<AgentCardProps> = ({
	role,
	userPersona,
	availableApis,
	rating = 4,
	tags = ["Automation", "Workflow"],
	price = "$15",
	onHireNow,
	onPreview,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isCustizeOpen, setIsCustomizeOpen] = React.useState(false);

	const handleCustomizeOpen = () => {
		setIsCustomizeOpen(true);
	};

	const handleCustomizeClose = () => {
		setIsCustomizeOpen(false);
	};

	const handleOpen = () => {
		setIsOpen(true);
		onPreview?.();
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className='p-2 rounded-lg border shadow-md border-[#4423E60D] max-w-[400px] '>
			{/* Header Section */}
			<div className='relative rounded-md w-full h-[150px] overflow-hidden pt-2'>
				<div className='absolute w-full flex justify-between items-center z-20 px-2'>
					<div className='light-gradient rounded-full p-1'>
						<div className='bg-white-a0 px-2 py-1 rounded-full text-[12px]'>
							<span className='text-[16px] gradient-text font-bold'>{price}</span> /month
						</div>
					</div>
					<div className='light-gradient rounded-full p-1 w-max h-max'>
						<div className='bg-white-a0 px-2 py-1 rounded-full text-[12px]'>
							<Bookmark className='w-4 h-4 text-primary' />
						</div>
					</div>
				</div>
				<Image
					src={agent.profileData.image}
					alt='profile'
					fill
				/>
			</div>

			{/* Rating and Info Section */}
			<div className='w-full flex items-center justify-between mt-1'>
				<StarRating rating={rating} />
				<span className='text-[14px]'>{rating}</span>
			</div>

			<h1 className='text-[16px] font-bold line-clamp-1'>{role}</h1>
			<p className='text-[12px] mt-2 text-gray-500 line-clamp-2'>{userPersona}</p>

			{/* Tags Section */}
			<div className='flex flex-wrap gap-2 items-center my-2'>
				{tags.map((tag, index) => (
					<div
						key={index}
						className='bg-[#4423E60D] px-2 py-1 text-[10px] rounded-full'
					>
						{tag}
					</div>
				))}
			</div>

			{/* Buttons Section */}
			<div className='flex justify-center gap-3 mt-1 w-full'>
				<CustomButton
					label='Preview'
					icon={<Eye className='w-4 h-4 text-primary' />}
					additionalClass='bg-[#4423E60D] gradient-text rounded-lg flex-1 border border-primary py-1 px-2 text-[12px]'
					onClick={handleOpen}
				/>
				<CustomButton
					label='Hire Now'
					additionalClass='gradient border rounded-lg py-2 px-4 text-[12px] text-white-a0'
					icon={
						<div className='p-1 border border-white-a0 rounded-full'>
							<Rocket className='w-3 h-3 text-white-a0' />
						</div>
					}
					onClick={onHireNow}
				/>
			</div>

			{/* Resume Modal/Sheet Section */}
			<Sheet
				open={isOpen}
				onOpenChange={handleClose}
			>
				<SheetContent className='sm:max-w-[1200px] w-full overflow-auto'>
					<div className='w-full flex justify-between items-center'>
						<SheetClose asChild>
							<button className='p-2 hover:bg-gray-200 rounded-full'>
								<PanelRightClose className='w-8 h-8 text-primary' />
							</button>
						</SheetClose>
						<div className='flex justify-center gap-3'>
							<CustomButton
								label='Hire Now'
								additionalClass='bg-white-a0 text-primary border border-primary rounded-md py-2 px-6 text-[12px]'
								icon={
									<div className='p-0.5 bg-primary rounded-full'>
										<div className='p-1 bg-white-a0 rounded-full'>
											<Rocket className='w-3 h-3 text-primary' />
										</div>
									</div>
								}
								onClick={onHireNow}
							/>
							<CustomButton
								label='Customize'
								additionalClass='gradient rounded-lg py-3 px-6 text-[12px]'
								icon={<Edit className='w-4 h-4 text-white-a0' />}
								onClick={handleCustomizeOpen}
							/>
						</div>
					</div>
					<ProfileHeader
						image={agent.profileData.image}
						role={role}
						userPersona={userPersona}
						rating={4.6}
					/>
					<div className='flex gap-2 mt-8 flex-wrap'>
						<div className='space-y-4 px-2 max-w-[300px]'>
							<IntegratedApps availableApis={availableApis} />
							<Languages languageData={agent.languageData} />
							<Tags />
						</div>
						<div className='flex-1'>
							<Timeline
								agent={agent}
								type='resume'
							/>
						</div>
					</div>
				</SheetContent>
			</Sheet>

			{/* Profile  Sheet*/}
			<Sheet
				open={isCustizeOpen}
				onOpenChange={handleCustomizeClose}
			>
				<SheetContent className='sm:max-w-[1200px] w-full overflow-auto'>
					<div className='w-full flex justify-between items-center'>
						<SheetClose asChild>
							<button className='p-2 hover:bg-gray-200 rounded-full'>
								<PanelRightClose className='w-8 h-8 text-primary' />
							</button>
						</SheetClose>
						<div className='flex justify-center gap-3'>
							<CustomButton
								label='Cancel'
								additionalClass='bg-white-a0 text-primary border border-primary rounded-md py-2 px-6 text-[12px]'
								onClick={onHireNow}
							/>
							<CustomButton
								label='Save'
								additionalClass='gradient rounded-lg py-3 px-6 text-[12px]'
								icon={<Check className='w-4 h-4 text-white-a0' />}
							/>
						</div>
					</div>
					<ProfileHeader
						image={agent.profileData.image}
						role={role}
						userPersona={userPersona}
						rating={4.6}
					/>
					<div className='flex gap-2 mt-8 flex-wrap'>
						<div className='space-y-4 px-2  max-w-[300px]'>
							<Traits />
							<IntegratedApps availableApis={availableApis} />
						</div>
						<div className='flex-1 '>
							<Timeline
								agent={agent}
								type='profile'
							/>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default AgentCard;
