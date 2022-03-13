import { TaskItemType } from 'components/TaskItem/types';

export interface IStepProps {
  id: number;
  title: string;
  num: number;
  tasks: TaskItemType[];
}
