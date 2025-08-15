"use client";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa"; // Importación de íconos

type ToggleTodoProps = {
	todo: {
		id: string;
		completed: boolean;
	};
	handleTodoStateAction: (id: string, completed: boolean) => void;
};

export default function ToggleTodo({
	todo,
	handleTodoStateAction,
}: ToggleTodoProps) {
	return (
		<button
			type="button"
			onClick={() => handleTodoStateAction(todo.id, !todo.completed)}
		>
			{todo.completed ? (
				<FaCheckSquare className="text-green-500" size={24} />
			) : (
				<FaRegSquare className="text-red-500" size={24} />
			)}
		</button>
	);
}
