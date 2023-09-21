import {Container} from './styles';
import {BsPlus} from 'react-icons/bs';
import {useData} from './data';

export const Layout = () => {
 const {data} = useData();
 return (
  <Container onSubmit={data.hookForm.handleSubmit(data.onSubmit)}>
   <label>
    <div>
     <BsPlus
      size={24}
      onClick={data.hookForm.handleSubmit(data.onSubmit)}
     />
     <input
      type="text"
      placeholder="Adicionar uma tarefa"
      maxLength={255}
      {...data.hookForm.register('newTask', {
       onChange: e => data.handleCountCaracter(e.target.value.length),
      })}
     />
    </div>
    <button type="submit">Adicionar Tarefa</button>
    {data.countCaracter > 0 && <span>{data.countCaracter}/255</span>}
   </label>
   <span className="error">{data.hookForm.errors.newTask?.message}</span>
  </Container>
 );
};
