import { z } from "zod";

export const signInSchema = z.object({
  email: z.string({ required_error: "palese enter your email" }).email("palese enter a valid email").min(1, "palese enter your email"),
  password: z.string({ required_error: "enter your password" }).min(1, "palese enter your password"),
});

export type SignInFields = z.infer<typeof signInSchema>;
