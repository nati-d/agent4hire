import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href='/'
			className='flex-shrink-0'
		>
			<h1 className="gradient-text text-[24px] font-bold">Agent4Hire</h1>
		</Link>
	);
};

export default Logo;
