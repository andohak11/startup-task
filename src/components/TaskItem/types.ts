export type TaskItemType = {
  id: number;
  title: string;
};

export interface ITaskItemProps extends TaskItemType {
  step: number;
  disabled: boolean;
}
