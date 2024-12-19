"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/utils/constants";

const MenuItems = () => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col md:flex-row md:px-[16px] md:gap-[32px] md:space-x-4">
			{NAV_LINKS.map((item) => {
				const isActive = pathname === item.href;
				return (
					<Link
						key={item.name}
						href={item.href}
						className={`py-1 font-[500] relative transition-colors duration-200 text-[20px] ${
							isActive
								? "gradient-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#7517e2]  after:to-[#1799e2]"
								: "text-foreground hover:bg-accent hover:text-accent-foreground"
						}`}
					>
						{item.name}
					</Link>
				);
			})}
		</div>
	);
};

export default MenuItems;

