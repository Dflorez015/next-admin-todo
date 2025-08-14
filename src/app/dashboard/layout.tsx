// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import Sidebar from "./_widgets/Sidebar";
import TopMenu from "./_widgets/TopMenu";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Sidebar />
			<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
				<TopMenu />
				{children}
			</div>
		</>
	);
}
