import React, {ReactNode} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RootLayout = ({children}: {children: ReactNode}) => {
	return (
		<main>
			<Navbar />
			<div className='pt-[50px]'>
				{children}
			</div>
			<Footer />
		</main>
	);
};

export default RootLayout;
