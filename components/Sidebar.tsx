'use client'

import * as React from 'react'
import { ChevronDown, Bot, BarChart, Users, CreditCard, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const menuItems = [
  { icon: Bot, label: 'Agent Builder' },
  { icon: BarChart, label: 'Analytics' },
  { icon: Users, label: 'My Agents' },
  { icon: CreditCard, label: 'Billing' },
  { icon: Settings, label: 'Settings' },
]

export function CustomSidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="w-full justify-start data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {!isCollapsed && (
                    <>
                      <div className="ml-2 flex flex-col items-start">
                        <span className="text-sm font-medium">John Doe</span>
                        <span className="text-xs text-muted-foreground">john@example.com</span>
                      </div>
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </>
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='px-4 mt-4'>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.label} className='hover:gradient'>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton asChild className="w-full justify-start">
                      <button className="flex items-center w-full text-left">
                        <item.icon className="h-3 w-3 shrink-0" />
                        {!isCollapsed && <span className="ml-3 text-[12px]">{item.label}</span>}
                      </button>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  {isCollapsed && <TooltipContent side="right">{item.label}</TooltipContent>}
                </Tooltip>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
      <div className="px-3 py-4">
          <div className="rounded-lg light-gradient p-4 shadow-lg border border-sidebar-border">
            <h3 className="text-[16px] text-center font-bold mb-2">Upgrade to Pro</h3>
            <p className="mb-4 text-center text-[10px] text-sidebar-muted">Get unlimited chats and advanced features!</p>
            <Button className="w-full gradient text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
              Upgrade Now
            </Button>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}




