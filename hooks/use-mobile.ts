"use client";

import {useState, useEffect} from "react";

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Check on mount

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isMobile;
}
