"use client";

import { useRouter } from "next/navigation";
import { IoTrashOutline } from "react-icons/io5";

type DeleteTodosProps = {
	deleteTodosAction: () => Promise<number>;
};

export default function DeleteTodos({ deleteTodosAction }: DeleteTodosProps) {
	const router = useRouter();

	// Handle the deletion of todos
	const handleDelete = async () => {
		try {
			const deletedCount = await deleteTodosAction();
			alert(`Deleted ${deletedCount} todos`);
			router.refresh(); // Refresca la página
		} catch (error) {
			console.error("Error deleting todos:", error);
			alert("Error deleting todos");
		}
	};

	return (
		<button
			type="button"
			className="flex items-center justify-center rounded bg-red-400 px-4 py-2 text-white hover:bg-red-700 transition-all gap-2"
			onClick={handleDelete}
		>
			<IoTrashOutline />
			Delete
		</button>
	);
}
