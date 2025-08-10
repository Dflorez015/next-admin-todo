# Dockerized Next.js Todo App

This is a simple todo app built with Next.js and Postgres. It uses Docker to run the Postgres database and Next.js to serve the app.

## Prerequisites

- Docker
- Docker Compose
- Node.js

## Getting Started for Development

1. Clone the repository
2. Fill in the `.env` file with your Postgres database connection string (see `.env.template` for an example)
3. Run `docker-compose up -d` to start the Postgres database and Next.js server
4. Execute the `npx prisma migrate dev` command to create the database schema
5. Execute the `npx prisma generate` command to generate the Prisma client
6. Execute the `npm run dev` command to start the Next.js development server
7. You can now start adding todos and see them in the database executing the [seed](localhost:3001/api/seed) endpoint

# Prisma

This project uses Prisma to manage the database. You can find the Prisma schema in the `prisma/schema.prisma` file.

## commands

```
npx prisma init # initialize the database and prisma configuration
npx prisma migrate dev # migrate the database
npx prisma generate # generate the prisma client
```