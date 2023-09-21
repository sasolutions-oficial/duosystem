import {useAtom} from 'jotai';
import {sortDoneByDateState, sortToDoByDateState} from './states';
import {useTaskStore} from '../../services/states/tasks';

export const useData = () => {
 const [sortToDoByDate, setSortToDoByDate] = useAtom(sortToDoByDateState);
 const [sortDoneByDate, setSortDoneByDate] = useAtom(sortDoneByDateState);
 const {tasks} = useTaskStore();

 const tasksToDo = tasks.filter(task => task.status === 'todo');
 const tasksDone = tasks.filter(task => task.status === 'done');

 const tasksToDoFilteredBySort = tasksToDo.sort((prev, next) =>
  sortToDoByDate === 'asc'
   ? prev.createdAt - next.createdAt
   : next.createdAt - prev.createdAt,
 );

 const tasksDoneFilteredBySort = tasksDone.sort((prev, next) =>
  sortDoneByDate === 'asc'
   ? prev.createdAt - next.createdAt
   : next.createdAt - prev.createdAt,
 );

 const handleSortToDoByDate = () => {
  if (sortToDoByDate === 'asc') return setSortToDoByDate('desc');
  if (sortToDoByDate === 'desc') return setSortToDoByDate('asc');
 };

 const handleSortDoneByDate = () => {
  if (sortDoneByDate === 'asc') return setSortDoneByDate('desc');
  if (sortDoneByDate === 'desc') return setSortDoneByDate('asc');
 };

 const data = {
  tasks,
  tasksToDoFilteredBySort,
  tasksDoneFilteredBySort,
  sortToDoByDate,
  sortDoneByDate,
  handleSortToDoByDate,
  handleSortDoneByDate,
 };
 return {data};
};
