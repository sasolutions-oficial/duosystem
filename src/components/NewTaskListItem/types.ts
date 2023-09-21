import {z} from 'zod';
import {inputTaskSchema} from './schemas';

export type InputTaskProps = z.infer<typeof inputTaskSchema>;
