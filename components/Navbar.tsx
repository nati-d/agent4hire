'use client';

import { useState } from "react";
import { LogIn, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import MenuItems from "./MenuItems";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative z-50 container'>
      <div className='fixed md:top-2 left-0 right-0 container md:rounded-full w-full glass border '>
        <div className='container mx-auto px-[64px] py-[16px] sm:px-6 lg:px-8'>
          <div className='flex items-center gap-[24px] justify-between w-full py-[12px]'>
            <div className='flex items-center gap-4 sm:gap-8 lg:gap-12'>
              <Logo />
            <MenuItems />
            
                <SearchInput />
              <div className='flex gap-2'>
                <CustomButton
                  label='Login'
                  additionalClass='bg-white  border border-primary border-opacity-30 py-2 px-[14px] sm:px-6 text-white rounded-full text-xs sm:text-sm hover:bg-opacity-30 transition-all duration-300'
                />
                <CustomButton
                  label='SignUp'
                  additionalClass='bg-black  px-[12px] sm:px-6 text-white-a0 rounded-full text-[14px] sm:text-[14px] hover:bg-opacity-90 transition-all duration-300'
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
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-300"
                  >
                    <Menu className='h-6 w-6' />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side='right'
                  className='w-[300px] sm:w-[400px] glass'
                >
                  <nav className='flex flex-col space-y-4'>
                    <SearchInput />
                    <MenuItems />
                    <CustomButton
                      label='Login'
                      icon={<LogIn className='w-4 h-4' />}
                      additionalClass='bg-white bg-opacity-20 text-white rounded-lg text-xs hover:bg-opacity-30 transition-all duration-300'
                    />
                    <CustomButton
                      label='SignUp'
                      additionalClass='bg-black bg-opacity-70 text-white rounded-lg text-xs hover:bg-opacity-90 transition-all duration-300'
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

