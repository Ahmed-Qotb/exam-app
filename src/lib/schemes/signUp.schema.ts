import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string({ required_error: "Please enter your username" })
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username cannot exceed 20 characters"),

    firstName: z
      .string({ required_error: "Please enter your first name" })
      .min(1, "First name is required")
      .max(50, "First name cannot exceed 50 characters"),

    lastName: z
      .string({ required_error: "Please enter your last name" })
      .min(1, "Last name is required")
      .max(50, "Last name cannot exceed 50 characters"),

    email: z
      .string({ required_error: "Please enter your email" })
      .email("Please enter a valid email")
      .min(1, "Email is required"),

    phone: z
      .string({ required_error: "Please enter your phone number" })
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot exceed 15 digits")
      .regex(/^[0-9+\-() ]+$/, "Please enter a valid phone number"),

    password: z
      .string({ required_error: "Please enter your password" })
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password cannot exceed 50 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),

    rePassword: z.string({ required_error: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });

export type SignUpFields = z.infer<typeof signUpSchema>;
