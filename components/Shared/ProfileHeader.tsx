import {Bookmark} from "lucide-react";
import Image from "next/image";
import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import StarRating from "../StarRating";

type ProfileHeaderProps = {
	image: string;
	role: string;
	userPersona: string;
	rating: number;
};

const ProfileHeader = ({image, role, userPersona, rating}: ProfileHeaderProps) => {
	return (
		<div className='w-full light-gradient p-4 rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-8'>
			<div className='relative w-full sm:w-[150px] md:w-[200px] h-[200px] sm:h-[150px] md:h-[200px] rounded-lg overflow-hidden mx-auto sm:mx-0'>
				<Image
					src={image}
					alt='profile'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className='flex-1'>
				<div className='flex justify-between w-full items-center gap-2'>
					<h1 className='text-lg sm:text-xl md:text-2xl font-bold truncate'>{role}</h1>
					<div className='light-gradient rounded-lg p-2 flex-shrink-0 border border-primary'>
						<Bookmark className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary' />
					</div>
				</div>
				<p className='text-xs sm:text-sm md:text-base italic text-gray-600 mt-2 sm:mt-4'>&quot;{userPersona}&quot;</p>
				<div className='flex flex-wrap gap-4 items-center mt-4 sm:mt-8'>
					<div className='flex items-center gap-2'>
						<StarRating rating={rating} />
						<span className='text-xs sm:text-sm font-semibold'>{rating.toFixed(1)}</span>
					</div>
					<div className='flex gap-2 items-center'>
						<CircularProgressBar
							progress={80}
							size={24}
							strokeWidth={3}
						/>
						<p className='text-xs sm:text-sm'>
							<span className='gradient-text font-semibold'>95%</span> Task Completion
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
