import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {isDoneDictionary} from './helpers';
import {TasksProps, MyPersist} from './types';

export const useTaskStore = create<TasksProps>(
 (persist as MyPersist)(
  set => ({
   tasks: [],
   createTask: task => set(state => ({tasks: [...state.tasks, task]})),
   updateTitleTask: (title, id) =>
    set(state => ({
     tasks: state.tasks.map(task => {
      if (task.id === id) {
       return {...task, title};
      }
      return task;
     }),
    })),
   updateStatusTask: (status, id) =>
    set(state => ({
     tasks: state.tasks.map(task => {
      if (task.id === id) {
       return {...task, status, isDone: isDoneDictionary[status]};
      }
      return task;
     }),
    })),
   updateDoneDateTask: id =>
    set(state => ({
     tasks: state.tasks.map(task => {
      if (task.id === id) {
       return {...task, doneAt: Date.now()};
      }
      return {...task};
     }),
    })),
   deleteTask: id =>
    set(state => ({
     tasks: state.tasks.filter(task => task.id !== id),
    })),
  }),
  {
   name: 'task-storage',
   storage: createJSONStorage(() => localStorage),
  },
 ),
);
