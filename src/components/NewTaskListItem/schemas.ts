import {z} from 'zod';

export const inputTaskSchema = z.union([
 z.object({
  newTask: z
   .string()
   .min(3, {message: 'O nome da tarefa deve conter, no mínimo, 3 caracteres.'})
   .trim(),
 }),
 z.object({
  newTask: z.literal(''),
 }),
]);
