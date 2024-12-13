"use client";

import {useState} from "react";
import {LogIn, Menu} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import MenuItems from "./MenuItems";
import CustomButton from "./CustomButton";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='relative z-50 container '>
			<div className='fixed md:top-2 left-0 right-0 container md:rounded-full bg-white-a0 shadow-md'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center gap-4 sm:gap-8 lg:gap-12'>
							<Logo />
							<div className='hidden lg:block'>
								<MenuItems />
							</div>
						</div>
						<div className='hidden md:flex items-center space-x-4'>
							<div className='hidden lg:block'>
								<SearchInput />
							</div>
							<div className='flex gap-2'>
								<div className='gradient p-1 rounded-full'>
									<CustomButton
										label='Login'
										additionalClass='bg-white-a0 px-4 sm:px-6 text-black rounded-full text-xs sm:text-sm'
									/>
								</div>
								<CustomButton
									label='SignUp'
									additionalClass='bg-black px-4 sm:px-6 text-white-a0 rounded-full text-xs sm:text-sm'
								/>
							</div>
						</div>
						
						<div className='md:hidden'>
							<Sheet
								open={isOpen}
								onOpenChange={setIsOpen}
							>
								<SheetTrigger asChild>
									<Button
										variant='outline'
										size='icon'
										aria-label='Menu'
									>
										<Menu className='h-6 w-6' />
									</Button>
								</SheetTrigger>
								<SheetContent
									side='right'
									className='w-[300px] sm:w-[400px]'
								>
									<nav className='flex flex-col space-y-4'>
										<SearchInput />
										<MenuItems />
										<CustomButton
											label='Login'
											icon={<LogIn className='w-4 h-4' />}
											additionalClass='bg-primary-a50 text-white-a0 rounded-lg text-xs'
										/>
										<CustomButton
											label='SignUp'
											additionalClass='bg-black text-white-a0 rounded-lg text-xs'
										/>
									</nav>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;