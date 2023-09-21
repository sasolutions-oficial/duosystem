import {Container, EmptyList} from './styles';
import {NewTaskListItem} from '../NewTaskListItem';
import {TaskListItem} from '../TaskListItem';
import {TaskListItemDone} from '../TaskListItemDone';
import {BsSortDownAlt, BsSortUp} from 'react-icons/bs';
import {useData} from './data';

export const Layout = () => {
 const {data} = useData();

 return (
  <Container>
   <h1>
    Tarefas{' '}
    {data.sortToDoByDate === 'asc' ? (
     <BsSortUp
      size={24}
      onClick={data.handleSortToDoByDate}
     />
    ) : (
     <BsSortDownAlt
      size={24}
      onClick={data.handleSortToDoByDate}
     />
    )}
   </h1>
   <NewTaskListItem />

   {data.tasksToDoFilteredBySort.map(task => {
    return (
     <TaskListItem
      data={task}
      key={task.id}
     />
    );
   })}
   {data.tasksToDoFilteredBySort.length === 0 && (
    <EmptyList>Não há tarefas a fazer para apresentar!</EmptyList>
   )}

   <h2>
    Concluídas{' '}
    {data.sortDoneByDate === 'asc' ? (
     <BsSortUp
      size={24}
      onClick={data.handleSortDoneByDate}
     />
    ) : (
     <BsSortDownAlt
      size={24}
      onClick={data.handleSortDoneByDate}
     />
    )}
   </h2>

   {data.tasksDoneFilteredBySort.map(task => {
    return (
     <TaskListItemDone
      data={task}
      key={task.id}
     />
    );
   })}
   {data.tasksDoneFilteredBySort.length === 0 && (
    <EmptyList>Não há tarefas concluídas para apresentar!</EmptyList>
   )}
  </Container>
 );
};
