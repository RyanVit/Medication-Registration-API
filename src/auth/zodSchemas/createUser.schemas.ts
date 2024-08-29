import { z } from "zod";

export const createUserSchema = z.object({
    email: z.string({ message: "Invalid email"}).email({message: "Invalid email"}),
    password: z.string({message: "Password must be at least 6 characters"}).min(4,{message: "Password must be at least 6 characters"}),
})