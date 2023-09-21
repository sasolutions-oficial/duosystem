import {Container} from './styles';
import {TaskList} from '../../components/TaskList';
import {useWindowSize} from 'usehooks-ts';

export const Layout = () => {
 const {height} = useWindowSize();

 console.log(height);

 return (
  <Container height={height}>
   <TaskList />
  </Container>
 );
};
