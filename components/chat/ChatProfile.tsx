"use client";

import {useState} from "react";
import {UserPlus, Bell, Ban, Flag, ChevronDown} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface ChatProfileProps {
	name: string;
	image?: string;
	isGroup: boolean;
	memberCount?: number;
}

export default function ChatProfile({name, image, isGroup, memberCount = 0}: ChatProfileProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex items-center gap-2 '>
			<div className='flex items-center space-x-3'>
				<Avatar>
					<AvatarImage
						src={image}
						alt={name}
					/>
					<AvatarFallback>{name.charAt(0)}</AvatarFallback>
				</Avatar>
				<div>
					<h2 className='text-[14px] font-semibold'>{name}</h2>
					{isGroup && <p className='text-[10px] text-gray-500'>{memberCount} members</p>}
				</div>
			</div>
			<DropdownMenu
				open={isOpen}
				onOpenChange={setIsOpen}
			>
				<DropdownMenuTrigger asChild>
					<Button
						variant='ghost'
						size='sm'
						className='h-8 w-8 p-0'
					>
						<ChevronDown className='h-4 w-4' />
						<span className='sr-only'>Open menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align='end'
					className='w-56'
				>
					<DropdownMenuItem>
						<UserPlus className='mr-2 h-2 w-2' />
						<span className="text-[12px]">{isGroup ? "Add members" : "Start group chat"}</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Bell className='mr-2 h-2 w-2' />
						<span className="text-[12px]">Mute notifications</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Ban className='mr-2 h-2 w-2' />
						<span className="text-[12px]">{isGroup ? "Leave group" : "Block"}</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Flag className='mr-2 h-2 w-2' />
						<span className="text-[12px]">Report</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
