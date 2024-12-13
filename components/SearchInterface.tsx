"use client";

import {Search, Store, GraduationCap, Heart, Settings2, Paintbrush} from "lucide-react";
import {useState, useRef, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const CATEGORIES = [
	{id: "all", label: "All", icon: null},
	{id: "sales", label: "Sales", icon: Store},
	{id: "education", label: "Education", icon: GraduationCap},
	{id: "health", label: "Health", icon: Heart},
	{id: "technology", label: "Technology", icon: Settings2},
	{id: "art", label: "Art", icon: Paintbrush},
];

export default function SearchInterface() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [showLeftFade, setShowLeftFade] = useState(false);
	const [showRightFade, setShowRightFade] = useState(true);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (scrollContainerRef.current) {
				const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;
				setShowLeftFade(scrollLeft > 0);
				setShowRightFade(scrollLeft < scrollWidth - clientWidth - 1);
			}
		};

		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", handleScroll);
			handleScroll(); // Check initial state
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return (
		<div className='w-full mx-auto p-6 space-y-6 light-gradient mb-4'>
			<div className='flex gap-4'>
				<div className='relative flex-1 rounded-full'>
					<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4' />
					<Input
						className='w-full pl-10 rounded-full'
						placeholder='What type of agent are you looking to hire?'
						type='search'
					/>
				</div>
				<Button className='gradient text-white-a0 rounded-full hover:bg-gray-100'>
					<Search className='h-4 w-4 md:mr-2' />
					<span className=''>Search</span>
				</Button>
				<div className='bg-white-a0 rounded-md border hidden md:block'>
					<Select>
						<SelectTrigger className='w-[120px] bg-transparent border-none text-white'>
							<SelectValue placeholder='Sort By' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='newest'>Newest</SelectItem>
							<SelectItem value='oldest'>Oldest</SelectItem>
							<SelectItem value='popular'>Popular</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className='space-y-4'>
				<div className='w-full flex items-center justify-between'>
					<h2 className='text-2xl font-semibold text-white'>Popular</h2>
					<div className='bg-white-a0 rounded-md border md:hidden'>
						<Select>
							<SelectTrigger className='w-[120px] bg-transparent border-none text-white'>
								<SelectValue placeholder='Sort By' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='newest'>Newest</SelectItem>
								<SelectItem value='oldest'>Oldest</SelectItem>
								<SelectItem value='popular'>Popular</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className='relative'>
					{showLeftFade && <div className='absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10'></div>}
					{showRightFade && <div className='absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10'></div>}
					<div
						ref={scrollContainerRef}
						className='flex overflow-x-auto space-x-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'
					>
						{CATEGORIES.map((category) => (
							<Button
								key={category.id}
								variant='default'
								className={`rounded-full border border-primary flex-shrink-0 ${
									selectedCategory === category.id ? "bg-primary text-white-a0" : "bg-white text-black"
								}`}
								onClick={() => setSelectedCategory(category.id)}
							>
								{category.icon && <category.icon className='h-4 w-4 mr-2' />}
								{category.label}
							</Button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
