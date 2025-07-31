import { NextResponse } from "next/server";

export async function GET(request: Request) {
	return NextResponse.json({ name: "John Doe", message: "Hello, Next.js!" });
}

export async function POST(request: Request) {
	return NextResponse.json({ name: "John Doe", message: "Hello, Next.js!" });
}