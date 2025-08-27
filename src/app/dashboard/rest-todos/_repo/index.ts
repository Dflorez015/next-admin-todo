import type { Todo } from "@prisma/client";

export async function updateTodo(id: string, data: Partial<Todo>) {
	try {
		const response = await fetch(`http://localhost:3001/api/todos/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to update todo");
		}

		return await response.json();
	} catch (error) {
		console.error("Error updating todo:", error);
		throw error;
	}
}

export async function createTodo(data: Partial<Todo>) {
	try {
		const response = await fetch(`http://localhost:3001/api/todos`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to update todo");
		}

		return await response.json();
	} catch (error) {
		console.error("Error updating todo:", error);
		throw error;
	}
}

export async function deleteActiveTodos(): Promise<number> {
	try {
		const response = await fetch(`http://localhost:3001/api/todos`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to delete todos");
		}

		return await response.json();
	} catch (error) {
		console.error("Error deleting todos:", error);
		throw error;
	}
}

export async function getTodos(
	take: number = 5,
	skip: number = 0,
): Promise<Todo[]> {
	try {
		const response = await fetch(
			`http://localhost:3001/api/todos?take=${take}&skip=${skip}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to fetch todos");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching todos:", error);
		throw error;
	}
}

export async function getActiveTodosCount(): Promise<number> {
	try {
		const response = await fetch(`http://localhost:3001/api/todos/count`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(
				errorData.message || "Failed to fetch active todos count",
			);
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching active todos count:", error);
		throw error;
	}
}
