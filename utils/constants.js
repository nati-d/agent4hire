import { ReactNode } from 'react';
import {ChartArea, Database, DatabaseZapIcon, Handshake, Puzzle, Shield} from "lucide-react";
import {title} from "process";

export const NAV_LINKS = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Marketplace",
		href: "/marketplace",
	},
	{
		name: "Agent Builder",
		href: "/agent-builder",
	},
];

export const FEATURED_AGENTS = [
	{
		id: 1,
		title: "AI Salesperson",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd86c547312079719a28691b43200bb4ebdc52ccb3a021471e46f5f8357119e1?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
	{
		id: 2,
		title: "AI Salesperson team",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e0abdbd8397d6417469efd13a5e7cacc30b176c22a94a776ddce97f5eb0676f?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
	{
		id: 3,
		title: "AI Salesperson",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccdf141e9e31298783e65446fe3507132ec8a8578f809e53dcbce7e43753f6d5?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
	{
		id: 4,
		title: "AI Salesperson",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd86c547312079719a28691b43200bb4ebdc52ccb3a021471e46f5f8357119e1?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
	{
		id: 5,
		title: "AI Salesperson team",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e0abdbd8397d6417469efd13a5e7cacc30b176c22a94a776ddce97f5eb0676f?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
	{
		id: 6,
		title: "AI Salesperson",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccdf141e9e31298783e65446fe3507132ec8a8578f809e53dcbce7e43753f6d5?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
	{
		id: 7,
		title: "AI Salesperson",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd86c547312079719a28691b43200bb4ebdc52ccb3a021471e46f5f8357119e1?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
	{
		id: 8,
		title: "AI Salesperson team",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e0abdbd8397d6417469efd13a5e7cacc30b176c22a94a776ddce97f5eb0676f?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
	{
		id: 9,
		title: "AI Salesperson",
		description:
			"This agent is trained to identify leads, generate personalized sales messages, and close deals. Perfect for businesses needing sales support",
		rating: 4.5,
		tags: ["Sales", "Sales", "Sales"],
		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccdf141e9e31298783e65446fe3507132ec8a8578f809e53dcbce7e43753f6d5?placeholderIfAbsent=true&apiKey=e20908abffcd4ad390f22446ba0345ad",
	},
];

export const FEATURES = [
	{
		id: 1,
		title: "Customizable AI Agents",
		description: "Users can configure AI agents to handle specific tasks like workflow automation, customer service, or data analysis.",
		icon: <Database />,
	},
	{
		id: 2,
		title: "Advanced Analytics Dashboard",
		description: "Provides real-time insights, usage metrics, and performance reports to help users optimize agent efficiency.",
		icon: <ChartArea /> ,
	},
	{
		id: 3,
		title: "Integration with Third-Party Tools",
		description: "Seamlessly connect with platforms like Slack, Trello, CRM systems, or APIs for enhanced workflows.",
		icon: <Puzzle />,
	},
	{
		id: 4,
		title: "Team Collaboration",
		description: "Allows multiple users to collaborate on projects, share AI agents, and manage tasks in a shared workspace.",
		icon: <Handshake />,
	},
	{
		id: 5,
		title: "Role-Based Access Control",
		description: "Enables the assignment of permissions to team members based on their roles, ensuring data security .",
		icon: <Shield />,
	},
	{
		id: 6,
		title: "Drag-and-Drop Workflow Builder",
		description: "Simplifies the creation of complex workflows with an intuitive drag-and-drop interface for linking agents and tasks.",
		icon: <DatabaseZapIcon />,
	},
];

export const AGENTS = [
	{
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
	},
	{
		id: "A002",
		profileData: {
			image: "https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg?auto=compress&cs=tinysrgb&w=600",
			name: "Liam Hayes",
			tagline: "Innovative AI-Powered Sales Leader",
			rating: 4.7,
		},
		infoData: [
			{type: "email", label: "Email", value: "liam.hayes@agency.com"},
			{type: "website", label: "Website", value: "https://liamhayes.ai"},
			{type: "phone", label: "Phone", value: "+1 555-234-5678"},
			{type: "address", label: "Address", value: "Virtual Office"},
		],
		languageData: [
			{flag: "🇬🇧", language: "English", level: "Native"},
			{flag: "🇪🇸", language: "Spanish", level: "Fluent"},
		],
		experiences: [
			{
				position: "Sales Director",
				company: "Peak Performers",
				workDescription: "Managed a $10M sales pipeline, achieving a 30% YoY growth.",
				startDate: "2018-05-01",
				endDate: "2024-03-15",
			},
			{
				position: "Business Development Manager",
				company: "InnovateSales",
				workDescription: "Built strategic partnerships leading to 20% revenue growth.",
				startDate: "2014-01-10",
				endDate: "2018-04-30",
			},
		],
		coreAbilities: ["Lead Generation", "Strategic Planning", "Sales Forecasting", "Negotiation"],
		education: [
			{
				type: "Degree",
				reward: "MBA in Sales Strategy, Stanford University",
				date: "2013",
			},
			{
				type: "Certification",
				reward: "Certified Sales Leadership Professional",
				date: "2021",
			},
		],
		tasksCompleted: [
			{month: "January", tasks: 20},
			{month: "February", tasks: 38},
			{month: "March", tasks: 30},
			{month: "April", tasks: 19},
			{month: "May", tasks: 32},
			{month: "June", tasks: 26},
			{month: "July", tasks: 40},
			{month: "August", tasks: 45},
		],
		projects: [
			{
				title: "Task Manager",
				shortDescription: "A task management app with real-time tracking of Agent B's task progress.",
				demoName: "TaskManagerDemo",
			},
			{
				title: "Performance Tracker",
				shortDescription: "A performance tracking system for Agent B's tasks with detailed reports.",
				demoName: "PerformanceTrackerDemo",
			},
		],
		visualizations: [
			{
				type: "table",
				id: "task_performance",
				title: "Task Performance for Agent B",
				data: {
					columns: ["Task", "Status", "Completion Time (hrs)", "Priority"],
					rows: [
						["Develop Feature X", "Completed", 5.0, "High"],
						["Fix Bug Y", "Completed", 1.5, "Medium"],
						["Prepare Demo", "Pending", null, "High"],
						["Client Meeting", "Completed", 2.0, "Low"],
					],
				},
			},
			{
				type: "pie_chart",
				id: "completion_rate",
				title: "Completion Rate for Agent B",
				data: {
					values: [
						{label: "Completed", value: 75},
						{label: "Pending", value: 25},
					],
				},
			},
			{
				type: "line_chart",
				id: "time_vs_tasks",
				title: "Tasks Completed Over Time by Agent B",
				data: {
					x_axis: "Weeks",
					y_axis: "Tasks Completed",
					values: [
						{week: "Week 1", tasks_completed: 3},
						{week: "Week 2", tasks_completed: 2},
						{week: "Week 3", tasks_completed: 1},
					],
				},
			},
		],
	},
	{
		id: "A003",
		profileData: {
			image: "https://images.pexels.com/photos/6153362/pexels-photo-6153362.jpeg?auto=compress&cs=tinysrgb&w=600",
			name: "Ethan Kim",
			tagline: "Customer Support Automation Expert",
			rating: 4.6,
		},
		infoData: [
			{type: "email", label: "Email", value: "ethan.kim@agency.com"},
			{type: "website", label: "Website", value: "https://ethankim.ai"},
			{type: "phone", label: "Phone", value: "+1 555-345-6789"},
			{type: "address", label: "Address", value: "Remote Workspace"},
		],
		languageData: [
			{flag: "🇬🇧", language: "English", level: "Native"},
			{flag: "🇰🇷", language: "Korean", level: "Fluent"},
		],
		experiences: [
			{
				position: "Support Lead",
				company: "HelpDeskPro",
				workDescription: "Reduced ticket resolution time by 50% using AI tools.",
				startDate: "2017-09-01",
				endDate: "2022-12-15",
			},
			{
				position: "Technical Support Analyst",
				company: "ResolveTech",
				workDescription: "Handled 200+ cases weekly, ensuring 90% customer satisfaction.",
				startDate: "2014-06-15",
				endDate: "2017-08-31",
			},
		],
		coreAbilities: ["Workflow Automation", "AI-Powered Support", "Customer Retention", "Data Analytics"],
		education: [
			{
				type: "Degree",
				reward: "BSc in Information Systems, University of Washington",
				date: "2014",
			},
			{
				type: "Certification",
				reward: "ITIL Foundation Certification",
				date: "2018",
			},
		],
		tasksCompleted: [
			{month: "January", tasks: 30},
			{month: "February", tasks: 45},
			{month: "March", tasks: 37},
			{month: "April", tasks: 25},
			{month: "May", tasks: 40},
			{month: "June", tasks: 34},
			{month: "July", tasks: 47},
			{month: "August", tasks: 52},
		],
		projects: [
			{
				title: "Task Completion Overview",
				shortDescription: "A tool to track Agent C's monthly task completions and analyze productivity.",
				demoName: "CompletionOverviewDemo",
			},
			{
				title: "Reporting Dashboard",
				shortDescription: "A dashboard that generates reports based on Agent C's completed tasks over time.",
				demoName: "ReportingDashboardDemo",
			},
		],
		visualizations: [
			{
				tables: {
					client_interactions: {
						title: "Client Interaction Summary for Agent C",
						columns: ["Client", "Interaction Type", "Outcome", "Time Spent (mins)"],
						rows: [
							["Client A", "Meeting", "Positive", 60],
							["Client B", "Follow-Up Call", "Neutral", 30],
							["Client C", "Email Communication", "Pending", 20],
						],
					},
					feedback_analysis: {
						title: "Feedback Analysis for Agent C",
						columns: ["Feedback Type", "Count"],
						rows: [
							["Positive", 4],
							["Neutral", 2],
							["Negative", 1],
						],
					},
				},
				bar_charts: {
					interaction_distribution: {
						title: "Interaction Distribution by Type for Agent C",
						x_axis: "Interaction Type",
						y_axis: "Number of Interactions",
						data: [
							{type: "Meeting", count: 3},
							{type: "Call", count: 2},
							{type: "Email", count: 1},
						],
					},
				},
			},
		],
	},
	{
		id: "A004",
		profileData: {
			image: "https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=600",
			name: "Olivia Rivera",
			tagline: "AI Developer and Workflow Specialist",
			rating: 4.9,
		},
		infoData: [
			{type: "email", label: "Email", value: "olivia.rivera@agency.com"},
			{type: "website", label: "Website", value: "https://oliviarivera.ai"},
			{type: "phone", label: "Phone", value: "+1 555-456-7890"},
			{type: "address", label: "Address", value: "Cloud-Based Operations"},
		],
		languageData: [
			{flag: "🇬🇧", language: "English", level: "Native"},
			{flag: "🇮🇹", language: "Italian", level: "Fluent"},
		],
		experiences: [
			{
				position: "AI Workflow Engineer",
				company: "StreamlineAI",
				workDescription: "Designed AI workflows that improved operational efficiency by 35%.",
				startDate: "2021-03-01",
				endDate: "2024-08-01",
			},
			{
				position: "Full Stack Developer",
				company: "CodeCraft",
				workDescription: "Built scalable applications for various business solutions.",
				startDate: "2017-02-01",
				endDate: "2021-02-28",
			},
		],
		coreAbilities: ["AI Development", "Process Optimization", "Full Stack Development", "Integration Design"],
		education: [
			{
				type: "Degree",
				reward: "MSc in Computer Science, MIT",
				date: "2017",
			},
			{
				type: "Certification",
				reward: "AWS Certified Solutions Architect",
				date: "2020",
			},
		],
		tasksCompleted: [
			{month: "January", tasks: 25},
			{month: "February", tasks: 40},
			{month: "March", tasks: 33},
			{month: "April", tasks: 22},
			{month: "May", tasks: 36},
			{month: "June", tasks: 29},
			{month: "July", tasks: 45},
			{month: "August", tasks: 50},
		],
		projects: [
			{
				title: "Task Tracker",
				shortDescription: "A task tracking app specifically designed for Agent D to manage their tasks.",
				demoName: "TaskTrackerDemoD",
			},
			{
				title: "Weekly Report Generator",
				shortDescription: "A report generator for Agent D's tasks completed each week.",
				demoName: "WeeklyReportGeneratorDemo",
			},
		],
		visualizations: [
			{
				type: "table",
				id: "sales_data",
				title: "Sales Metrics for Agent D",
				data: {
					columns: ["Product", "Status", "Revenue ($)", "Units Sold"],
					rows: [
						["Product A", "Sold", 5000, 20],
						["Product B", "Sold", 3000, 15],
						["Product C", "Pending", 0, 0],
					],
				},
			},
			{
				type: "pie_chart",
				id: "sales_distribution",
				title: "Revenue Distribution by Product for Agent D",
				data: [
					{label: "Product A", value: 62.5},
					{label: "Product B", value: 37.5},
					{label: "Product B", value: 37.5},
					{label: "Product B", value: 37.5},
				],
			},
			{
				type: "stacked_bar_chart",
				id: "sales_vs_pending",
				title: "Sales vs Pending Orders by Product for Agent D",
				data: {
					x_axis: "Product",
					y_axis: "Units",
					values: [
						{product: "Product A", sold: 20, pending: 0},
						{product: "Product B", sold: 15, pending: 0},
						{product: "Product C", sold: 0, pending: 5},
					],
				},
			},
		],
	},
];

export const PRICING_TIERS = [
	{
		name: "Basic",
		description: "Get Started with the Essentials",
		price: "Free",
		buttonText: "Get Started",
		buttonVariant: "outline" ,
		features: [
			"Access to a limited selection of AI agents",
			"2,000 API credits per month for trial use",
			"Basic search and filter options",
			"Limited customization of workflows",
			"Community support through FAQs",
		],
	},
	{
		name: "Starter",
		description: "A Solid Foundation for Growth",
		price: "$29/month",
		buttonText: "Schedule a demo",
		buttonVariant: "outline" ,
		features: [
			"Access to up to 10 AI agents across all categories",
			"10,000 API credits per month",
			"Basic performance analytics dashboard",
			"Email and chat support",
			"Workflow customization with templates",
		],
	},
	{
		name: "Pro",
		description: "Advanced Tools for Professionals",
		price: "$99/month",
		buttonText: "Get started",
		popular: true,
		buttonVariant: "default" ,
		features: [
			"Unlimited access to all agents. Workflows",
			"50,000 API credits per month",
			"Advanced analytics dashboard with export options",
			"Role-based recommendations for agents",
			"Priority customer support",
			"Priority customer support",
			"Priority customer support",
		],
	},
	{
		name: "Enterprise",
		description: "Custom Solutions for Big Ambitions",
		price: "$299/month",
		buttonText: "Schedule a demo",
		buttonVariant: "outline" ,
		features: [
			"All features of the Pro plan",
			"150,000 API credits per month",
			"Dedicated account manager for personalized support",
			"API integrations with third-party platforms",
			"Advanced customization options",
		],
	},
];
