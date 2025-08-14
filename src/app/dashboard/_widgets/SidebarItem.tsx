"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import cn from "@/lib/cn";

type SidebarItemProps = {
	href: string;
	title: string;
	iconAction: IconType;
};

export default function SidebarItem({
	href,
	title,
	iconAction: Icon,
}: SidebarItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<li>
			<Link
				href={href}
				className={cn(
					"relative px-4 py-3 bg-gradient-to-r flex items-center space-x-4 rounded-xl text-foreground transition-colors duration-200",
					{
						// Gradiente base
						" from-sky-200 to-cyan-50 dark:from-sky-650 dark:to-cyan-200 dark:text-background":
							!isActive,
						// Gradiente activo
						"from-purple-600 to-purple-400 dark:from-purple-800 dark:to-purple-600 dark:text-foreground":
							isActive,
					},
					// Hover para ambos temas
					"hover:from-purple-500 hover:to-purple-300 dark:hover:from-purple-600 dark:hover:to-purple-400",
				)}
			>
				<Icon size={30} className="text-current" />
				<span className="-mr-1 font-medium text-current">{title}</span>
			</Link>
		</li>
	);
}
