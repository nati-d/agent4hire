"use client";

import React from "react";

interface CircularProgressProps {
	progress: number;
	size?: number;
	strokeWidth?: number;
	className?: string;
}

export default function CircularProgressBar({progress, size = 120, strokeWidth = 8, className = ""}: CircularProgressProps) {
	const center = size / 2;
	const radius = center - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;
	const safeProgress = Math.min(100, Math.max(0, progress));
	const strokeDashoffset = circumference - (safeProgress / 100) * circumference;

	return (
		<div
			className={`relative ${className}`}
			style={{width: size, height: size}}
		>
			<svg
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				className='rotate-[-90deg]'
			>
				<circle
					cx={center}
					cy={center}
					r={radius}
					fill='none'
					stroke='#4423E60D'
					strokeWidth={strokeWidth}
				/>
				<circle
					cx={center}
					cy={center}
					r={radius}
					fill='none'
					stroke='url(#gradient)'
					strokeWidth={strokeWidth}
					strokeLinecap='round'
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					style={{transition: "stroke-dashoffset 0.5s ease-in-out"}}
				/>
				<defs>
					<linearGradient
						id='gradient'
						x1='0%'
						y1='0%'
						x2='100%'
						y2='0%'
					>
						<stop
							offset='0%'
							stopColor='#7517e2'
						/>
						<stop
							offset='100%'
							stopColor='#1799e2'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}
