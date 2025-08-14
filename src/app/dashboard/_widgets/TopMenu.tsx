import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";
import cn from "@/lib/cn";

export default function TopMenu() {
	return (
		<header className="sticky z-10 top-0 h-16 border-b bg-background lg:py-2.5">
			<div className="px-6 flex items-center justify-between space-x-4">
				<h5 className="text-2xl text-gray-600 dark:text-gray-300 font-medium lg:block">
					Dashboard
				</h5>
				<button type="button" className="w-12 h-16 -mr-2 border-r lg:hidden">
					<CiMenuBurger size={30} />
				</button>
				<div className="flex space-x-2">
					<div className="md:block">
						<div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
							<span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
								<CiSearch />
							</span>
							<input
								type="search"
								name="leadingIcon"
								id="leadingIcon"
								placeholder="Search here"
								className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
							/>
						</div>
					</div>

					<TopButtons icon={<CiSearch />} className="md:hidden" />
					<TopButtons icon={<CiChat1 size={25} />} />
					<TopButtons icon={<CiBellOn size={25} />} />
				</div>
			</div>
		</header>
	);
}

const TopButtons = ({
	icon,
	className,
}: {
	icon: React.ReactNode;
	className?: string;
}) => {
	return (
		<button
			type="button"
			className={cn(
				"flex items-center justify-center w-10 h-10 rounded-xl border bg-background focus:bg-background active:bg-gray-200 cursor-pointer",
				className,
			)}
		>
			{icon}
		</button>
	);
};
