import {useEffect, useState} from 'react';
import {Container} from './styles';
import {LayoutProps} from '../TaskListItem/types';
import dayjs from 'dayjs';
import {useTaskStore} from '../../services/states/tasks';
import {statusDictionary} from '../../services/helpers/statusDictionary';

export const Layout = ({data}: LayoutProps) => {
 const [isFinished, setIsFinished] = useState(false);
 const {updateStatusTask} = useTaskStore();

 useEffect(() => {
  if (!isFinished) {
   return updateStatusTask('done', data.id);
  }
  return updateStatusTask('todo', data.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [isFinished]);

 return (
  <Container key={data.id}>
   <div>
    <label
     htmlFor={`ready-task-${data.id}`}
     className="checkbox-container">
     <input
      type="checkbox"
      name=""
      id={`ready-task-${data.id}`}
      className="checkbox"
      checked={!isFinished}
      onClick={() => setIsFinished(prev => !prev)}
     />
     <span className="checkmark" />
    </label>
    <label className="data-container">
     <p>{data.title}</p>
    </label>
   </div>
   <div className="date-container">
    <p>Criado em</p>
    <strong>{dayjs(data.createdAt).format('DD/MM/YYYY HH:mm')}</strong>
   </div>
   <div className="date-container">
    <p>Concluído em</p>
    <strong>{dayjs(data.doneAt).format('DD/MM/YYYY HH:mm')}</strong>
   </div>
   <div className="date-container">
    <p>Status</p>
    <strong>{statusDictionary['done']}</strong>
   </div>
  </Container>
 );
};
