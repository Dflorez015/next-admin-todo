import { NextResponse } from "next/server";
import prisma from "@prisma";
import { updateTodoDtoSchema } from "../_dto";

interface TodoByIdArgs {
	params: {
		id: string;
	};
}

export async function GET(_: Request, args: TodoByIdArgs) {
	const { id } = args.params;
	const todo = await prisma.todo.findUnique({
		where: {
			id,
		},
	});

	if (!todo) {
		return NextResponse.json(
			{ message: `Todo not found with id ${id}` },
			{ status: 404 },
		);
	}

	return NextResponse.json(todo);
}

export async function PATCH(request: Request, args: TodoByIdArgs) {
	const { id } = args.params;
	const data = await request.json();

	if (!data) {
		return NextResponse.json(
			{ message: "Invalid request body, must be a JSON object" },
			{ status: 400 },
		);
	}

	const currentTodo = await prisma.todo.findFirst({
		where: {
			id,
		},
	});

	if (!currentTodo) {
		return NextResponse.json(
			{ message: `Todo not found with id ${id}` },
			{ status: 404 },
		);
	}

	// TODO: try catch wrapper or either pattern
	const validateData = await updateTodoDtoSchema
		.validate(data, { strict: true })
		.catch((err) => err);

	if ("errors" in validateData) {
		return NextResponse.json(
			{ message: `${validateData.errors}` },
			{ status: 400 },
		);
	}

	const todo = await prisma.todo.update({
		where: {
			id,
		},
		data,
	});

	return NextResponse.json(todo);
}
