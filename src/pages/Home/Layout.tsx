import {Container} from './styles';
import {TaskList} from '../../components/TaskList';
import {useWindowSize} from 'usehooks-ts';

export const Layout = () => {
 const {height} = useWindowSize();
 return (
  <Container height={height}>
   <TaskList />
  </Container>
 );
};
