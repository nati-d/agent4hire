import { z } from 'zod'

export const formSchema = z.object({
  role: z.string().min(1, "Role is required"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
})

export type FormData = z.infer<typeof formSchema>

