import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * combine tailwind classes
 * @param inputs
 * @returns
 */
export default function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
