import type { Todo } from "@prisma/client";
import DeleteTodos from "../_components/DeleteTodos";
import { NewTodo } from "../_components/NewTodo";
import ToggleTodo from "../_components/ToggleTodo";
import {
	createTodo,
	deleteActiveTodos,
	getActiveTodosCount,
	getTodos,
	updateTodo,
} from "./_repo";

const getStaticProps = async () => {
	const todos = await getTodos(20, 0);
	const todosCount = await getActiveTodosCount();

	const handleTodoState = async (id: string, completed: boolean) => {
		"use server";
		return await updateTodo(id, { completed });
	};

	const createTodoMutation = async (todoData: Partial<Todo>) => {
		"use server";
		return await createTodo(todoData);
	};

	const deleteTodosMutation = async () => {
		"use server";
		return await deleteActiveTodos();
	};

	return {
		props: {
			todos,
			todosCount,
			handleTodoState,
			createTodoMutation,
			deleteTodosMutation,
		},
	};
};

export default async function Page() {
	const {
		props: {
			todos = [],
			todosCount = 0,
			handleTodoState,
			createTodoMutation,
			deleteTodosMutation,
		},
	} = await getStaticProps();

	return (
		<main className="px-6 pt-6 ">
			<section>
				<NewTodo createTodoAction={createTodoMutation} />
				{todosCount > 0 ? (
					//TODO: hacer un badge de todosCount sobre este componente
					<DeleteTodos deleteTodosAction={deleteTodosMutation} />
				) : null}
			</section>
			<section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{todos.map((todo) => (
					<div
						key={todo.id}
						className={
							"grid grid-cols-[24px_1fr] [&>svg]:cursor-pointer gap-4 dark:text-gray-950 " +
							(todo.completed ? "todoDone" : "todoPending")
						}
					>
						<ToggleTodo todo={todo} handleTodoStateAction={handleTodoState} />
						<span>{todo.description}</span>
					</div>
				))}
			</section>
		</main>
	);
}
