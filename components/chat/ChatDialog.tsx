import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";

type Message = {
	id: number;
	sender: "user" | "other";
	content: string;
	timestamp: string;
};

const messages: Message[] = [
	{id: 1, sender: "other", content: "Good morning. I hope this message finds you well. How may I assist you today?", timestamp: "09:00 AM"},
	{id: 2, sender: "user", content: "Good morning. I'm inquiring about the status of the Q3 report. Has it been finalized?", timestamp: "09:02 AM"},
	{id: 3, sender: "other", content: "Certainly, I'd be happy to check on that for you. One moment, please.", timestamp: "09:05 AM"},
	{
		id: 4,
		sender: "other",
		content: "I've just confirmed with the finance team. The Q3 report is currently in its final review stage and should be ready by end of day.",
		timestamp: "09:08 AM",
	},
	{
		id: 5,
		sender: "user",
		content: "Thank you for the prompt update. Could you please notify me once it's available for distribution?",
		timestamp: "09:10 AM",
	},
	{
		id: 6,
		sender: "other",
		content: "Absolutely, I'll make sure to inform you as soon as the report is ready for distribution. Is there anything else you need assistance with?",
		timestamp: "09:12 AM",
	},
];

export default function ChatDialog() {
	return (
		<div className=''>
			<ScrollArea className='flex-1 p-4'>
				<div className='space-y-4'>
					{messages.map((message) => (
						<div
							key={message.id}
							className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
						>
							<div
								className={`flex items-end space-x-2 max-w-[80%] ${
									message.sender === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
								}`}
							>
								<Avatar className='w-8 h-8'>
									<AvatarImage src={message.sender === "user" ? "/user-avatar.png" : "/other-avatar.png"} />
									<AvatarFallback>{message.sender === "user" ? "U" : "O"}</AvatarFallback>
								</Avatar>
								<div
									className={`px-4 py-2 rounded-lg ${message.sender === "user" ? "bg-blue-100 text-blue-900" : "bg-gray-100 text-gray-800"}`}
								>
									<p className='text-sm'>{message.content}</p>
									<span className='text-xs text-gray-500 mt-1 block'>{message.timestamp}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</ScrollArea>
			<div className='bg-gray-50 p-4 border-t'>
				<div className='flex items-center space-x-2'>
					<Input
						type='text'
						placeholder='Type your message...'
						className='flex-1'
					/>
					<Button size='icon'>
						<Send className='h-4 w-4' />
						<span className='sr-only'>Send message</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
