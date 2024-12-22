import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Function to generate visible page numbers
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if there are 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Add the first page
      pages.push(1);

      // Add "..." if currentPage is far from the start
      if (currentPage > 3) {
        pages.push("...");
      }

      // Add pages near the current page
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        pages.push(i);
      }

      // Add "..." if currentPage is far from the end
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Add the last page
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center justify-self-end space-x-2 my-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full flex cursor-pointer items-center gap-2 border border-primary px-[24px] py-[12px] flex-shrink-0 bg-white-a0 text-black"
      >
        <ChevronLeft className="h-4 w-4" /> <span>Prev</span>
      </button>

      {/* Page Buttons */}
      {visiblePages.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`rounded-full cursor-pointer flex items-center gap-2 border border-primary px-[24px] py-[12px] flex-shrink-0 ${
              currentPage === page
                ? "bg-primary text-white-a0"
                : "bg-white-a0 text-black"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-4 py-2 text-gray-500">
            ...
          </span>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full flex cursor-pointer items-center gap-2 border border-primary px-[24px] py-[12px] flex-shrink-0 bg-white-a0 text-black"
      >
        <ChevronRight className="h-4 w-4" /> <span>Next</span>
      </button>
    </div>
  );
};

export default Pagination;
