import { Action, ActionTypes, State, TasksType } from './types';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.TOGGLE_TASK: {
      const { step, value } = action.data as { step: number; value: number };

      const current = [...(state.tasks[step] || [])];

      if (current.includes(value)) {
        return {
          ...state,
          tasks: { ...state.tasks, [step]: current.filter((item) => item !== value) }
        };
      }

      return { ...state, tasks: { ...state.tasks, [step]: [...current, value] } };
    }
    case ActionTypes.UNSELECT_STEP: {
      const step = action.data as number;

      return { ...state, tasks: { ...state.tasks, [step]: [] } };
    }

    case ActionTypes.SET_TASKS:
      return { ...state, tasks: action.data as TasksType };
    default:
      return state;
  }
};

export default reducer;
