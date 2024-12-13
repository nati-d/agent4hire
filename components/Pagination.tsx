import React from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPageChange}) => {
	return (
		<div className='flex items-center justify-center space-x-2 my-8'>
			<Button
				variant='outline'
				size='icon'
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronLeft className='h-4 w-4' />
			</Button>
			{Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
				<Button
					key={page}
					variant={currentPage === page ? "default" : "outline"}
					onClick={() => onPageChange(page)}
				>
					{page}
				</Button>
			))}
			<Button
				variant='outline'
				size='icon'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<ChevronRight className='h-4 w-4' />
			</Button>
		</div>
	);
};

export default Pagination;
