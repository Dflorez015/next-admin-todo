import ToggleTodo from "./_components/ToggleTodo";
import { getTodos, updateTodo } from "./_repo";

const getStaticProps = async () => {
	const todos = await getTodos();

	const handleTodoState = async (id: string, completed: boolean) => {
		"use server";
		return await updateTodo(id, { completed });
	};

	return {
		props: {
			todos,
			handleTodoState,
		},
	};
};

export default async function Page() {
	const {
		props: { todos = [], handleTodoState },
	} = await getStaticProps();

	return (
		<main className="px-6 pt-6 ">
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
