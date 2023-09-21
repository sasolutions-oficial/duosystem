import {StateCreator} from 'zustand';
import {PersistOptions} from 'zustand/middleware';

export type TaskProps = {
 id: string;
 title: string;
 status: 'todo' | 'done';
 isDone: boolean;
 createdAt: number;
 doneAt: number;
};
export type TasksProps = {
 tasks: TaskProps[];
 createTask: (task: TaskProps) => void;
 updateTitleTask: (title: string, id: string) => void;
 updateStatusTask: (status: 'todo' | 'done', id: string) => void;
 updateDoneDateTask: (id: string) => void;
 deleteTask: (id: string) => void;
};
export type MyPersist = (
 config: StateCreator<TasksProps>,
 options: PersistOptions<TasksProps>,
) => StateCreator<TasksProps>;
