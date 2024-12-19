import React from "react";
import {Star, StarHalf, Star as StarOutline} from "lucide-react";

interface StarRatingProps {
	rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({rating}) => {
	const renderStars = () => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(
					<Star
						key={i}
						className='text-[#FF9500] fill-current'
						size={16}
					/>
				);
			} else if (i - 0.5 === rating) {
				stars.push(
					<StarHalf
						key={i}
						className='text-[#FF9500] fill-current'
						size={16}
					/>
				);
			} else {
				stars.push(
					<StarOutline
						key={i}
						className='text-[#FF9500] fill-current'
						size={16}
					/>
				);
			}
		}
		return stars;
	};

	return <div className='flex gap-[8px]'>{renderStars()}</div>;
};

export default StarRating;
