"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";
import cn from "@/lib/cn";

type SidebarItemProps = {
	href: string;
	title: string;
};

export default function SidebarItem({ href, title }: SidebarItemProps) {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={cn(
				"relative px-4 py-3 flex items-center space-x-4 rounded-xl text-foreground bg-gradient-to-r from-sky-200 to-cyan-50 dark:from-sky-950 dark:to-cyan-700",
				{
					"from-purple-600 to-purple-400 dark:from-purple-950 dark:to-purple-700":
						pathname.includes(href),
				},
			)}
		>
			<CiBookmarkCheck size={30} className="text-current" />
			<span className="-mr-1 font-medium text-current">{title}</span>
		</Link>
	);
}
