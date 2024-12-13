import * as React from "react";
import {ChevronDown, Grid, Hash, MessageSquare, MessageSquareDiff, Users} from "lucide-react";

import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import CustomButton from "../CustomButton";

interface ChatGroup {
	name: string;
	icon: React.ReactNode;
	chats: Chat[];
}

interface Chat {
	id: string;
	name: string;
	avatar?: string;
	status?: "online" | "offline" | "away";
	unreadCount?: number;
	lastMessage?: string;
	time?: string;
}

const chatGroups: ChatGroup[] = [
	{
		name: "Direct Messages",
		icon: <Users className='h-4 w-4' />,
		chats: [
			{
				id: "1",
				name: "Alice Johnson",
				avatar: "/placeholder-user.jpg",
				status: "online",
				unreadCount: 3,
				lastMessage: "Can we schedule a meeting?",
				time: "10:30 AM",
			},
			{
				id: "2",
				name: "Bob Smith",
				avatar: "/placeholder-user.jpg",
				status: "away",
				lastMessage: "I've sent the report.",
				time: "Yesterday",
			},
		],
	},
	{
		name: "Groups",
		icon: <Hash className='h-4 w-4' />,
		chats: [
			{
				id: "5",
				name: "community-support",
				unreadCount: 2,
				lastMessage: "Help request submitted.",
				time: "3:20 PM",
			},
			{
				id: "6",
				name: "open-source-projects",
				lastMessage: "PR #45 merged!",
				time: "1 week ago",
			},
		],
	},
	{
		name: "Spaces",
		icon: <Grid className='h-4 w-4' />,
		chats: [
			{
				id: "3",
				name: "marketing-team",
				unreadCount: 5,
				lastMessage: "New campaign strategy discussed.",
				time: "1:00 PM",
			},
			{
				id: "4",
				name: "engineering-team",
				lastMessage: "Any blockers for the sprint?",
				time: "2 days ago",
			},
		],
	},

	{
		name: "Apps",
		icon: <MessageSquare className='h-4 w-4' />,
		chats: [
			{
				id: "7",
				name: "integration-notifications",
				lastMessage: "API connection established.",
				time: "5:00 PM",
			},
			{
				id: "8",
				name: "app-alerts",
				unreadCount: 4,
				lastMessage: "Server downtime alert.",
				time: "10:00 AM",
			},
		],
	},
];

export default function ChatSidebar() {
	return (
		<div className='border-r w-[300px]'>
			<div className='flex py-6 items-center  '>
				<CustomButton
					label='New Chat'
					icon={<MessageSquareDiff className='w-4 h-4' />}
					additionalClass='text-[12px] bg-primary-200 text-white-a0 border w-full  font-semibold px-8 py-3 mx-4 '
				/>
			</div>
			<div className='h-[calc(100vh-60px)] overflow-y-auto'>
				<div className='flex flex-col gap-4 p-2'>
					{chatGroups.map((group, index) => (
						<Collapsible
							key={index}
							defaultOpen
						>
							<CollapsibleTrigger className='flex w-full items-center justify-between py-1'>
								<div className='flex items-center gap-2 text-[12px] font-semibold '>
									{group.icon}
									<span className='text-[12px]'>{group.name}</span>
								</div>
								<ChevronDown className='h-4 w-4 text-muted-foreground' />
							</CollapsibleTrigger>
							<CollapsibleContent className='mt-1'>
								<div className='flex flex-col gap-1'>
									{group.chats.map((chat) => (
										<ChatItem
											key={chat.id}
											chat={chat}
										/>
									))}
								</div>
							</CollapsibleContent>
						</Collapsible>
					))}
				</div>
			</div>
		</div>
	);
}

function ChatItem({chat}: {chat: Chat}) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant='ghost'
						className={cn("w-full justify-start px-2", chat.unreadCount && "font-semibold")}
					>
						<div className='flex w-full items-center gap-2'>
							{chat.avatar ? (
								<Avatar className='h-8 w-8'>
									<AvatarImage
										src={chat.avatar}
										alt={chat.name}
									/>
									<AvatarFallback>{chat.name.slice(0, 2)}</AvatarFallback>
								</Avatar>
							) : (
								<span className='flex h-6 w-6 items-center justify-center rounded-full bg-muted'>{chat.name[0]}</span>
							)}
							<span className='flex-grow truncate text-left text-[12px]'>{chat.name}</span>
							{chat.unreadCount ? (
								<Badge
									variant='secondary'
									className='ml-auto'
								>
									{chat.unreadCount}
								</Badge>
							) : null}
						</div>
					</Button>
				</TooltipTrigger>
				<TooltipContent
					side='right'
					align='center'
				>
					<div className='text-sm'>
						<p className='font-semibold'>{chat.name}</p>
						<p className='text-muted-foreground'>{chat.lastMessage}</p>
						<p className='text-xs text-muted-foreground'>{chat.time}</p>
					</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
