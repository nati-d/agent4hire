import {useState, FormEvent, ChangeEvent} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";

const SearchInput: React.FC = () => {
	const [query, setQuery] = useState<string>("");

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Search query:", query);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<form
			onSubmit={handleSearch}
			className='relative flex items-center px-3  border rounded-full text-gray-500 border-gray-300 hover:border-gray-400 focus-within:border-gray-400 transition'
		>
			<Search className='w-[16px] h-[16px] text-gray-500' />
			<Input
				type='search'
				placeholder='Search...'
				value={query}
				onChange={handleChange}
				className='w-full px-2 py-[12px] bg-transparent border-none outline-none text-[16px]  placeholder-gray-400 focus:ring-0  placeholder:text-[16px]'
			/>
		</form>
	);
};

export default SearchInput;
