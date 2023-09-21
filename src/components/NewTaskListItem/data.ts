import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, SubmitHandler} from 'react-hook-form';
import {InputTaskProps} from './types';
import {inputTaskSchema} from './schemas';
import {v4 as uuidv4} from 'uuid';
import {useTaskStore} from '../../services/states/tasks';
import {useState} from 'react';

export const useData = () => {
 const {createTask} = useTaskStore();
 const {
  register,
  handleSubmit,
  reset,
  getValues,
  formState: {errors},
 } = useForm<InputTaskProps>({
  defaultValues: {
   newTask: '',
  },
  resolver: zodResolver(inputTaskSchema),
 });
 const [countCaracter, setCountCaracter] = useState(
  getValues('newTask').length,
 );

 const onSubmit: SubmitHandler<InputTaskProps> = (data: {newTask: string}) => {
  if (!data.newTask) {
   reset({newTask: ''});
   setCountCaracter(0);
   return;
  }

  createTask({
   id: uuidv4(),
   title: data.newTask,
   status: 'todo',
   isDone: false,
   createdAt: Date.now(),
   doneAt: 0,
  });
  reset({newTask: ''});
  setCountCaracter(0);
 };

 const handleCountCaracter = (length: number) => setCountCaracter(length);

 const data = {
  hookForm: {
   register,
   handleSubmit,
   reset,
   getValues,
   errors,
  },
  onSubmit,
  countCaracter,
  handleCountCaracter,
 };
 return {data};
};
