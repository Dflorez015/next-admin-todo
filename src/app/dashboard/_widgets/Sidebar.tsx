"use client";
import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaCalendarAlt, FaCheckSquare, FaList } from "react-icons/fa"; // Importación de íconos
import SidebarItem from "./SidebarItem";

// Opciones de navegación
const sidebarOptions = [
	{ href: "/dashboard", title: "Dashboard", iconAction: FaCalendarAlt },
	{
		href: "/dashboard/rest-todos",
		title: "Rest TODOS",
		iconAction: FaCheckSquare,
	},
	{
		href: "/dashboard/server-todos",
		title: "Server actions",
		iconAction: FaList,
	},
];

export default function Sidebar() {
	return (
		<aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-background transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
			<div>
				<div className="-mx-6 px-6 py-4">
					<Link href="/dashboard" title="home">
						<Image
							src="https://dummyimage.com/128x40.png/000/ffffff&text=Logo"
							className="w-32"
							width={128}
							height={40}
							alt="logo"
						/>
					</Link>
				</div>

				<div className="mt-8 text-center">
					<Image
						src="https://dummyimage.com/180x180.png/000/ffffff&text=User"
						alt="user_logo"
						width={110}
						height={110}
						className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
					/>
					<h5 className="hidden mt-4 text-xl font-semibold text-gray-600 dark:text-gray-200 lg:block">
						Cynthia J. Watts
					</h5>
					<span className="hidden text-gray-400 dark:text-gray-50 lg:block">
						Admin
					</span>
				</div>

				<ul className="space-y-2 tracking-wide mt-8">
					{sidebarOptions.map((option) => (
						<SidebarItem
							key={option.href}
							href={option.href}
							title={option.title}
							iconAction={option.iconAction}
						/>
					))}
				</ul>
			</div>

			<div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
				<button
					type="button"
					className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group dark:text-gray-200"
				>
					<CiLogout />
					<span className="group-hover:text-gray-700 dark:group-hover:text-gray-400">
						Logout
					</span>
				</button>
			</div>
		</aside>
	);
}
