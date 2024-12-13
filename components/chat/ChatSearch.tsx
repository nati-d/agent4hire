"use client";
import {useState} from "react";
import {Search, Mic} from "lucide-react";

export default function ChatSearch() {
	const [searchQuery, setSearchQuery] = useState("");
	const [isListening, setIsListening] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
		// Here you would typically handle the search logic
	};

	const handleMicClick = () => {
		setIsListening(!isListening);
		// Here you would typically handle the voice input logic
		console.log("Mic clicked, listening:", !isListening);
	};

	return (
		<div className='flex-1'>
			<form
				onSubmit={handleSubmit}
				className='relative'
			>
				<input
					type='text'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder='Search messages'
					className='w-full py-2 pl-10 pr-12 text-text-100 text-[14px] bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-text-300 focus:border-transparent'
					aria-label='Search messages'
				/>
				<button
					type='submit'
					className='absolute inset-y-0 left-0 flex items-center pl-3'
					aria-label='Submit search'
				>
					<Search className='w-5 h-5 text-gray-400' />
				</button>
				<button
					type='button'
					onClick={handleMicClick}
					className={`absolute inset-y-0 right-0 flex items-center pr-3 ${isListening ? "text-blue-500" : "text-gray-400"}`}
					aria-label='Voice search'
				>
					<Mic className='w-5 h-5' />
				</button>
			</form>
		</div>
	);
}
