import {z} from 'zod';
import {inputTaskSchema} from './schemas';

export interface ControllerProps {
 data: {
  id: string;
  title: string;
  status: 'todo' | 'done';
  isDone: boolean;
  createdAt: number;
  doneAt: number;
 };
}
export type LayoutProps = ControllerProps;
export type InputTaskProps = z.infer<typeof inputTaskSchema>;
