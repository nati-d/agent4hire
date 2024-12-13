import {Button} from "@/components/ui/button";
import {LogIn} from "lucide-react";

const SignInButton = () => {
	return (
		<Button
			size='sm'
			className='flex items-center gap-2 bg-primary-a50 text-white-a40'
		>
			<LogIn className='h-4 w-4' />
			Sign In
		</Button>
	);
};

export default SignInButton;
