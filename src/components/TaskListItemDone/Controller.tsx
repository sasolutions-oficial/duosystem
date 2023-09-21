import {Layout} from './Layout';
import {ControllerProps} from '../TaskListItem/types';

export const Controller = ({data}: ControllerProps) => {
 return <Layout data={data} />;
};
