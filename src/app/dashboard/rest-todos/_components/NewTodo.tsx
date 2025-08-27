"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Todo } from "@prisma/client";

type NewTodoProps = {
	createTodoAction: (todoData: Partial<Todo>) => Promise<void>;
};

export const NewTodo = ({ createTodoAction }: NewTodoProps) => {
	const [todoTitle, setTodoTitle] = useState("");
	const [todoDescription, setTodoDescription] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();

	const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const trimmedTitle = todoTitle.trim();
		const trimmedDescription = todoDescription.trim();

		if (trimmedTitle.length === 0 || trimmedDescription.length === 0) {
			console.warn("No se puede crear una tarea sin título o descripción");
			return;
		}

		setIsSubmitting(true);

		try {
			await createTodoAction({
				title: trimmedTitle,
				description: trimmedDescription,
			});
			setTodoTitle("");
			setTodoDescription("");
			router.refresh();
		} catch (error) {
			console.error("Error al crear la tarea:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoTitle(e.target.value);
	};

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoDescription(e.target.value);
	};

	const isFormValid =
		todoTitle.trim().length > 0 && todoDescription.trim().length > 0;

	return (
		<form
			className="flex flex-col w-full gap-4"
			onSubmit={handleFormSubmission}
		>
			<div className="flex flex-col gap-2">
				<input
					type="text"
					value={todoTitle}
					onChange={handleTitleChange}
					disabled={isSubmitting}
					className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all disabled:opacity-50"
					placeholder="Título de la tarea"
				/>

				<input
					type="text"
					value={todoDescription}
					onChange={handleDescriptionChange}
					disabled={isSubmitting}
					className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all disabled:opacity-50"
					placeholder="¿Qué necesita ser hecho?"
				/>
			</div>

			<div className="flex gap-2">
				<button
					type="submit"
					disabled={isSubmitting || !isFormValid}
					className="flex items-center justify-center rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? "Creando..." : "Crear"}
				</button>
			</div>
		</form>
	);
};
