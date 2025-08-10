import WidgetItem from "./_widgets/WidgetItem";

export default function Page() {
	return (
		<main className="px-6 pt-6">
			{/* TODO: dashboard/page.tsx  */}
			{/* Este contenido va dentro de page.tsx */}
			<section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<WidgetItem />
			</section>
		</main>
	);
}
