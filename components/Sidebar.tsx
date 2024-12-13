"use client";
import {Home, Inbox, Search, Settings,  MessageCircle, FileText} from "lucide-react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";

const newChatItems = [
	{
		title: "New Chat",
		url: "#",
		icon: MessageCircle,
	},
];

const platformItems = [
	{
		title: "History",
		url: "#",
		icon: FileText,
	},
	{
		title: "Dashboard",
		url: "#",
		icon: Home,
	},
	{
		title: "Agents",
		url: "#",
		icon: Inbox,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

const supportItems = [
	{
		title: "Help",
		url: "#",
		icon: Search,
	},
	{
		title: "Feedback",
		url: "#",
		icon: Settings,
	},
];

function SidebarLayout() {
	const {open} = useSidebar();
	const sidebarLogo = open ? "/images/brain.jpg" : "/images/brain.jpg";

	return (
		<Sidebar collapsible='icon'>
			<SidebarContent>
				<div className='p-4'>
					<Image
						src={sidebarLogo}
						alt='Logo'
						width={open ? 60 : 60}
						height={open ? 50 : 30}
					/>
				</div>

				<SidebarGroup>
					<SidebarGroupLabel>Features</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{newChatItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel>Platform</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{platformItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel>Support</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{supportItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<div className={`flex items-center ${open ? "p-4 rounded-md space-x-2 " : "w-full  "}  bg-gray-100 w-full `}>
					{open ? (
						<>
							<Avatar>
								<AvatarImage
									src='https://i.pravatar.cc/150?img=5'
									alt='User Avatar'
								/>
								<AvatarFallback>U</AvatarFallback>
							</Avatar>
							<div className='flex flex-col'>
								<span className='text-sm font-semibold'>Abebe Kebede</span>
								<span className='text-xs text-gray-500'>Admin</span>
							</div>
						</>
					) : (
						<Avatar>
							<AvatarImage
								src='https://i.pravatar.cc/150?img=5'
								alt='User Avatar'
								className='w-full h-full'
							/>
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
					)}
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}

export default SidebarLayout;
