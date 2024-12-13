"use client";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Slider} from "@/components/ui/slider";
import {Sparkles, Bookmark, Bot, Receipt, ChevronDown, FilterIcon} from "lucide-react";

type MenuOption = {
	id: string;
	label: string;
	icon: React.ComponentType<{className?: string}>;
};

type AgentType = {
	id: string;
	label: string;
};

type SelectItemType = {
	value: string;
	label: string;
};

type ReusableSelectProps = {
	placeholder: string;
	items: SelectItemType[];
};

type ReusableSliderProps = {
	label: string;
	value: number[];
	onChange: (value: number[]) => void;
	min?: number;
	max?: number;
	step?: number;
};

type CollapsibleSectionProps = {
	title: string;
	children: React.ReactNode;
};

const MENU_OPTIONS: MenuOption[] = [
	{id: "recently_viewed", label: "Recently Viewed", icon: Sparkles},
	{id: "saved_agents", label: "Saved Agents", icon: Bookmark},
	{id: "my_agents", label: "My Agents", icon: Bot},
	{id: "billings", label: "Billings", icon: Receipt},
];

const AGENT_TYPES: AgentType[] = [
	{id: "personal", label: "Personal"},
	{id: "team", label: "Team"},
	{id: "enterprise", label: "Enterprise"},
];

const REUSABLE_SELECT_ITEMS: Record<string, SelectItemType[]> = {
	category: [
		{value: "development", label: "Development"},
		{value: "business", label: "Business"},
		{value: "marketing", label: "Marketing"},
	],
	experience: [
		{value: "beginner", label: "Beginner"},
		{value: "intermediate", label: "Intermediate"},
		{value: "expert", label: "Expert"},
	],
	skills: [
		{value: "javascript", label: "JavaScript"},
		{value: "python", label: "Python"},
		{value: "react", label: "React"},
	],
	models: [
		{value: "gpt4", label: "GPT-4"},
		{value: "gpt35", label: "GPT-3.5"},
		{value: "claude", label: "Claude"},
	],
	integration: [
		{value: "slack", label: "Slack"},
		{value: "discord", label: "Discord"},
		{value: "teams", label: "Microsoft Teams"},
	],
};

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({title, children}) => (
	<Collapsible>
		<CollapsibleTrigger className='flex w-full items-center justify-between py-2 text-left text-[12px] font-medium'>
			{title}
			<ChevronDown className='h-4 w-4' />
		</CollapsibleTrigger>
		<CollapsibleContent className='pt-2'>{children}</CollapsibleContent>
	</Collapsible>
);

const ReusableSelect: React.FC<ReusableSelectProps> = ({placeholder, items}) => (
	<Select>
		<SelectTrigger className='text-[12px]'>
			<SelectValue placeholder={placeholder} />
		</SelectTrigger>
		<SelectContent>
			{items.map((item) => (
				<SelectItem
					key={item.value}
					value={item.value}
					className='text-[12px] hover:bg-purple-custom'
				>
					{item.label}
				</SelectItem>
			))}
		</SelectContent>
	</Select>
);

const ReusableSlider: React.FC<ReusableSliderProps> = ({label, value, onChange, min = 0, max = 100, step = 1}) => (
	<div className='space-y-2'>
		<label className='text-[12px] font-medium'>{label}</label>
		<div className='flex items-center space-x-2'>
			<span className='text-[12px] text-gray-500'>{min}</span>
			<Slider
				value={value}
				onValueChange={onChange}
				min={min}
				max={max}
				step={step}
				className='flex-1'
			/>
			<span className='text-[12px] text-gray-500'>{max}</span>
		</div>
	</div>
);

const AgentFilter: React.FC = () => {
	const [taskRate, setTaskRate] = useState<number[]>([50]);
	const [hibernationRate, setHibernationRate] = useState<number[]>([50]);
	const [price, setPrice] = useState<number[]>([20, 80]);
	const [rating, setRating] = useState<number[]>([5]);

	return (
		<aside className='space-y-4 max-w-[350px]'>
			<div className='space-y-4 rounded-xl bg-white-a0 p-4 shadow-lg'>
				<Button className='w-full gradient'>
					<span className='mr-2 text-lg'>+</span> Create Agent
				</Button>

				<ReusableSelect
					placeholder='Personal'
					items={AGENT_TYPES.map((agent) => ({value: agent.id, label: agent.label}))}
				/>

				<nav className='space-y-1'>
					{MENU_OPTIONS.map((option) => (
						<Button
							key={option.id}
							variant='ghost'
							className='w-full justify-start hover:bg-purple-custom text-[14px]'
						>
							<option.icon className='mr-2 h-4 w-4 text-primary' />
							<span className='text-[14px]'>{option.label}</span>
						</Button>
					))}
				</nav>
			</div>

			<div className='space-y-4 rounded-xl bg-white-a0 p-4 shadow-lg'>
				<div className='flex w-full justify-between items-center'>
					<h1 className='text-[16px] font-semibold gradient-text'>Filter</h1>
					<FilterIcon className='h-4 w-4 text-primary' />
				</div>
				<CollapsibleSection title='Explore'>
					{["Latest", "Trending", "Most-Popular", "Development", "Business", "For Beginners"].map((item) => (
						<Button
							key={item}
							variant='ghost'
							className='w-full justify-start text-[12px] font-normal hover:bg-purple-custom'
						>
							{item}
						</Button>
					))}
				</CollapsibleSection>

				{Object.entries(REUSABLE_SELECT_ITEMS).map(([key, items]) => (
					<CollapsibleSection
						key={key}
						title={key.charAt(0).toUpperCase() + key.slice(1)}
					>
						<ReusableSelect
							placeholder={`Select ${key}`}
							items={items}
						/>
					</CollapsibleSection>
				))}

				<div className='space-y-6 py-4'>
					<ReusableSlider
						label='Task completion rates(%)'
						value={taskRate}
						onChange={setTaskRate}
						max={100}
					/>

					<ReusableSlider
						label='Hibernation rates(%)'
						value={hibernationRate}
						onChange={setHibernationRate}
						max={100}
					/>

					<ReusableSlider
						label='Price(USD)'
						value={price}
						onChange={setPrice}
						max={100}
					/>

					<ReusableSlider
						label='Rating'
						value={rating}
						onChange={setRating}
						min={1}
						max={10}
					/>
				</div>

				<div className='flex gap-2 pt-4'>
					<Button
						variant='outline'
						className='flex-1 rounded-full bg-purple-custom'
					>
						Clear
					</Button>
					<Button className='flex-1 bg-primary hover:bg-indigo-700 rounded-full'>Apply</Button>
				</div>
			</div>
		</aside>
	);
};

export default AgentFilter;
