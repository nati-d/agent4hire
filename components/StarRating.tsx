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
						className='text-yellow-500 fill-current'
						size={14}
					/>
				);
			} else if (i - 0.5 === rating) {
				stars.push(
					<StarHalf
						key={i}
						className='text-yellow-500 fill-current'
						size={14}
					/>
				);
			} else {
				stars.push(
					<StarOutline
						key={i}
						className='text-yellow-500 fill-current'
						size={14}
					/>
				);
			}
		}
		return stars;
	};

	return <div className='flex'>{renderStars()}</div>;
};

export default StarRating;
