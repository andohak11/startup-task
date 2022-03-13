type ValueOf<T> = T[keyof T];

export const ActionTypes = {
  SET_TASKS: 'SET_TASKS',
  TOGGLE_TASK: 'TOGGLE_TASK',
  UNSELECT_STEP: 'UNSELECT_STEP'
};

export type TasksType = {
  [key: string]: number[];
};

export type Action = {
  type: ValueOf<typeof ActionTypes>;
  data: TasksType | { step: number; value: number } | number;
};

export type State = {
  tasks: TasksType;
};

export type DispatchContext = {
  toggleTask: (step: number, value: number) => void;
  unselectStep: (step: number) => void;
};

export type Dispatch = (action: Action) => void;
