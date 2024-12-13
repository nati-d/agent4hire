import React, {ReactNode} from "react";

interface CustomButtonProps {
	label: string;
	additionalClass?: string;
	icon?: ReactNode;
	onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({label, additionalClass = "", icon, onClick}) => {
	return (
		<button
			className={`${additionalClass} py-1 flex gap-2 items-center justify-center`}
			onClick={onClick}
		>
			{icon && <span>{icon}</span>}
			{label}
		</button>
	);
};

export default CustomButton;
