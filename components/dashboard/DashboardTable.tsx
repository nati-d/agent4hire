"use client";

import React, {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ArrowUpDown} from "lucide-react";

interface DynamicTableProps {
	data: {
		columns: string[];
		rows: (string | number | boolean)[][];
	};
}

const DynamicTable: React.FC<DynamicTableProps> = ({data}) => {
	const {columns, rows} = data;
	const [sortConfig, setSortConfig] = useState<{key: number; direction: "asc" | "desc"} | null>(null);

	const sortableRows = [...rows];

	const handleSort = (columnIndex: number) => {
		let direction: "asc" | "desc" = "asc";
		if (sortConfig && sortConfig.key === columnIndex && sortConfig.direction === "asc") {
			direction = "desc";
		}
		setSortConfig({key: columnIndex, direction});

		sortableRows.sort((a, b) => {
			if (a[columnIndex] < b[columnIndex]) {
				return direction === "asc" ? -1 : 1;
			}
			if (a[columnIndex] > b[columnIndex]) {
				return direction === "asc" ? 1 : -1;
			}
			return 0;
		});
	};

	return (
		<Table>
			<TableHeader>
				<TableRow>
					{columns.map((column, index) => (
						<TableHead
							key={index}
							onClick={() => handleSort(index)}
						>
							{column}
							<ArrowUpDown className='ml-2 h-4 w-4 inline' />
						</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{sortableRows.map((row, rowIndex) => (
					<TableRow key={rowIndex}>
						{row.map((cell, cellIndex) => (
							<TableCell key={cellIndex}>{cell}</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default DynamicTable;
