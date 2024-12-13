import AgentFilter from "@/components/Filter/AgentFilter";
import React, {ReactNode} from "react";

const MarketplaceLayout = ({children}: {children: ReactNode}) => {
	return (
		<main
			className='container flex gap-2'
		>
			<div className="hidden md:block">
				<AgentFilter />
			</div>
			{children}
		</main>
	);
};

export default MarketplaceLayout;
