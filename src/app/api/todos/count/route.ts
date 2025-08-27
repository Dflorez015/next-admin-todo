import { NextResponse } from "next/server";
import prisma from "@prisma";

export async function GET() {
	const todos = await prisma.todo.count({ where: { completed: true } });
	return NextResponse.json(todos);
}
