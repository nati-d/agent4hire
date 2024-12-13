import React from "react";
import Navbar from "@/components/Navbar";
import {ReactNode} from "react";
import {SidebarProvider} from "@/components/ui/sidebar";
import ChatSidebar from "@/components/chat/ChatSidebar";

const RootLayout = ({children}: {children: ReactNode}) => {
	return (
		<div className='h-[100dvh]'>
			<Navbar />
			<main
				className='container grid'
				style={{gridTemplateColumns: "20% 80%"}}
			>
				<SidebarProvider>
					<ChatSidebar />
				</SidebarProvider>
				{children}
			</main>
		</div>
	);
};

export default RootLayout;
