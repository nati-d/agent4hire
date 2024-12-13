import React from "react";
import ChatProfile from "./ChatProfile";
import ChatSearch from "./ChatSearch";
import {Separator} from "../ui/separator";
import ChatDialog from "./ChatDialog";

const ChatSection = () => {
	return (
		<section className='h-[calc(90vh-60px)] w-full bg-white-a0 my-4 rounded-md p-4'>
			<div className='flex gap-4 items-center'>
				<ChatProfile
					name='Project Team'
					image='/placeholder.svg?height=40&width=40'
					isGroup={true}
					memberCount={5}
				/>
				<ChatSearch />
			</div>
			<Separator className='mt-4' />
			<ChatDialog />
		</section>
	);
};
export default ChatSection;
