import React from "react";
import {Card, CardContent} from "../ui/card";
import {Search, XCircle} from "lucide-react";

type NoDataProps = {
	type: string;
	message: string;
};

const NoDataIllustration = ({type, message}: NoDataProps) => {
	return (
		<div className='w-full max-w-md mx-auto'>
			<div className='flex flex-col items-center justify-center p-6 text-center'>
				<div className='relative mb-4'>
					<Search className='w-24 h-24 text-gray-300' />
					<XCircle className='w-12 h-12 text-gray-400 absolute bottom-0 right-0' />
				</div>
				<h2 className='text-2xl font-bold text-gray-700 mb-2'>No {type} Found</h2>
				<p className='text-gray-500'>{message} </p>
				{/* <p className='text-gray-500 mt-2'>Please check your search criteria or try again later.</p> */}
			</div>
		</div>
	);
};

export default NoDataIllustration;
