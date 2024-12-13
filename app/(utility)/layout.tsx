import React from "react";
import SidebarLayout from "@/components/Sidebar";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";

import {ReactNode} from "react";

const UtilityLayout = ({children}: {children: ReactNode}) => {
	return (
		<SidebarProvider>
			<SidebarLayout />
			<main className='flex gap-2 w'>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
};

export default UtilityLayout;
