import { NextResponse } from "next/server";
import prisma from "@prisma";
import { createTodoDtoSchema } from "./_dto";

export async function GET(request: Request) {
	const searchParams = new URL(request.url).searchParams;
	const take = parseInt(searchParams.get("take") ?? "5");
	const skip = parseInt(searchParams.get("skip") ?? "0");

	if (Number.isNaN(take)) {
		return NextResponse.json(
			{ message: "Invalid take parameter" },
			{ status: 400 },
		);
	}

	if (take <= 1) {
		return NextResponse.json(
			{ message: "Take must be greater than 1" },
			{ status: 400 },
		);
	}

	if (Number.isNaN(skip)) {
		return NextResponse.json(
			{ message: "Invalid skip parameter" },
			{ status: 400 },
		);
	}

	if (skip < 0) {
		return NextResponse.json(
			{ message: "Skip must be greater than or equal to 0" },
			{ status: 400 },
		);
	}

	const todos = await prisma.todo.findMany({
		take,
		skip,
	});

	return NextResponse.json(todos);
}

export async function POST(request: Request) {
	const data = await request.json();

	if (!data) {
		return NextResponse.json(
			{ message: "Invalid request body, must be a JSON object" },
			{ status: 400 },
		);
	}

	// TODO: try catch wrapper or either pattern
	const validateData = await createTodoDtoSchema
		.validate(data, { strict: true })
		.catch((err) => err);

	if ("errors" in validateData) {
		return NextResponse.json(
			{ message: `${validateData.errors}` },
			{ status: 400 },
		);
	}

	const todo = await prisma.todo.create({
		data: {
			description: validateData.description,
			title: validateData.title,
			completed: validateData.completed,
		},
	});

	return NextResponse.json(todo);
}
