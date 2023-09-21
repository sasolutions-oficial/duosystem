import {useForm} from 'react-hook-form';
import {useTaskStore} from '../../services/states/tasks';
import {useRef} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {inputTaskSchema} from './schemas';
import {InputTaskProps} from './types';

export const useData = (title: string) => {
 const {
  register,
  getValues,
  setValue,
  trigger,
  formState: {errors},
 } = useForm<InputTaskProps>({
  defaultValues: {
   updateTask: title,
  },
  resolver: zodResolver(inputTaskSchema),
 });
 const {updateDoneDateTask, updateStatusTask, updateTitleTask, deleteTask} =
  useTaskStore();

 const refTasListItem = useRef<HTMLDivElement>(null);

 const data = {
  updateDoneDateTask,
  updateStatusTask,
  updateTitleTask,
  deleteTask,
  hookForm: {
   register,
   getValues,
   setValue,
   trigger,
   errors,
  },
  refTasListItem,
 };
 return {data};
};
