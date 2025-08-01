import { NextResponse } from "next/server";
import prisma from "@prisma";

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
