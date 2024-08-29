import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }) // Minimum length
    .max(20, { message: "Password must not exceed 20 characters" }) // Maximum length
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }) // At least one uppercase letter
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" }) // At least one lowercase letter
    .regex(/[0-9]/, { message: "Password must contain at least one number" }) // At least one digit
    .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character" }), // At least one special character
})