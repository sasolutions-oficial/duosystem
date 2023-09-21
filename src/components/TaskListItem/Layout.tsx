import {useEffect, useState} from 'react';
import {Container} from './styles';
import {LayoutProps} from './types';
import dayjs from 'dayjs';
import {useOnClickOutside} from 'usehooks-ts';
import {statusDictionary} from '../../services/helpers/statusDictionary';
import {useData} from './data';

export const Layout = ({data}: LayoutProps) => {
 const [editable, setEditable] = useState(false);
 const [isFinished, setIsFinished] = useState(false);
 const [countCaracter, setCountCaracter] = useState(data.title.length);

 const {data: dataHook} = useData(data.title);

 const handleClickOutside = () => {
  if (dataHook.hookForm.getValues('updateTask') === '') {
   dataHook.hookForm.setValue('updateTask', data.title);
   return;
  }
  dataHook.updateTitleTask(dataHook.hookForm.getValues('updateTask'), data.id);
  setEditable(false);
 };
 const handleClickToDoneTask = (id: string) => {
  setIsFinished(true);
  dataHook.updateDoneDateTask(id);
 };
 const handleDoubleClickToEditTask = () => {
  setEditable(true);
 };
 const handleOnBlurToFinishEditTask = handleClickOutside;
 useOnClickOutside(dataHook.refTasListItem, handleClickOutside);

 useEffect(() => {
  if (isFinished) {
   return dataHook.updateStatusTask('done', data.id);
  }
  return dataHook.updateStatusTask('todo', data.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [isFinished]);

 return (
  <Container
   key={data.id}
   ref={dataHook.refTasListItem}>
   <div>
    <label
     htmlFor={`ready-task-${data.id}`}
     className="checkbox-container">
     <input
      type="checkbox"
      name=""
      id={`ready-task-${data.id}`}
      className="checkbox"
      onClick={() => {
       handleClickToDoneTask(data.id);
      }}
      checked={isFinished}
     />
     <span className="checkmark" />
    </label>
    <label className="data-container">
     {!editable && (
      <p onDoubleClick={handleDoubleClickToEditTask}>{data.title}</p>
     )}
     {editable && (
      <>
       <input
        type="text"
        autoFocus
        maxLength={255}
        {...dataHook.hookForm.register('updateTask', {
         required: true,
         onChange: e => {
          setCountCaracter(e.target.value.length);
         },
         onBlur: handleOnBlurToFinishEditTask,
         value: dataHook.hookForm.getValues('updateTask'),
        })}
       />
       <span>{countCaracter}/255</span>
      </>
     )}
    </label>
   </div>
   <div className="date-container">
    <p>Criado em</p>
    <strong>{dayjs(data.createdAt).format('DD/MM/YYYY HH:mm')}</strong>
   </div>
   <div className="date-container">
    <p>Status</p>
    <strong>{statusDictionary[data.status]}</strong>
   </div>
   <button
    onClick={() => {
     dataHook.deleteTask(data.id);
    }}
    className="delete-task">
    Remover tarefa
   </button>
  </Container>
 );
};
