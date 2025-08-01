import { NextResponse } from "next/server";
import prisma from "@prisma";

export async function GET() {
	await prisma.todo.deleteMany();

	await prisma.todo.createMany({
		data: [
			{
				title: "Buy groceries",
				description: "Milk, bread, eggs, and fruit",
			},
			{
				title: "Learn Next.js",
				description: "The React Framework for Production",
				completed: true,
			},
			{
				title: "Take a nap",
				description: "Sometimes I just need a break from all the coding",
			},
			{
				title: "Play video games",
				description: "I love playing games with my friends",
			},
		],
	});
	return NextResponse.json({ message: "Seeding database" });
}
