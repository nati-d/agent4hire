import React from "react";

const Tags = ({ tags }: { tags: string[] }) => {
	return (
		<div>
			<h1 className="font-semibold text-[14px] mb-2">Tags</h1>
			<div className="flex flex-wrap gap-2">
				{tags && tags.length > 0 ? (
					tags.map((tag, index) => (
						<div
							key={index}
							className="bg-[#4423E60D] px-[8px] py-[4px] text-[12px] font-[400] rounded-full"
						>
							{tag}
						</div>
					))
				) : (
					<p className="text-gray-500 text-[12px]">No tags available</p>
				)}
			</div>
		</div>
	);
};

export default Tags;
