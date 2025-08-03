import { NextResponse } from "next/server";
import prisma from "@prisma";

interface TodoByIdArgs {
	params: {
		id: string;
	};
}

export async function GET(request: Request, args: TodoByIdArgs) {
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
