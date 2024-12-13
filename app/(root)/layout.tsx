import React, {ReactNode} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RootLayout = ({children}: {children: ReactNode}) => {
	return (
		<main>
			<Navbar />
			<div className='pt-[100px] poppins'>
				{children}
			</div>
			<Footer />
		</main>
	);
};

export default RootLayout;
