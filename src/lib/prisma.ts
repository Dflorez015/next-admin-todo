import { PrismaClient } from "@prisma/client";

// Declare a global variable to store the PrismaClient instance
declare global {
	var prisma: PrismaClient | undefined;
}

// biome-ignore lint/suspicious/noRedeclare: <its needed for prisma client>
let prisma: PrismaClient;

// Check if a PrismaClient instance already exists in the global scope
if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient();
} else {
	// In development, store the instance globally to prevent hot-reloading issues
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prisma = global.prisma;
}

export default prisma;
