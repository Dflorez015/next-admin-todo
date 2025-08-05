import yup from "@/lib/yup";

export const createTodoDtoSchema = yup.object({
	title: yup.string().required().min(10).max(50),
	description: yup.string().required().max(80),
	completed: yup.boolean().optional().default(false),
});
