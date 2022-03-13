import { createContext, useReducer, useContext, FC, useCallback, useEffect } from 'react';
import { STEPS_DATA } from 'helpers/constants';
import getRandomFact from 'helpers/getRandomFact';

import { State, Dispatch, ActionTypes, DispatchContext } from './types';
import reducer from './reducers';

const initialState: State = {
  tasks: {}
};

const TaskStateContext = createContext<State | undefined>(undefined);
const TaskDispatchContext = createContext<Dispatch | undefined>(undefined);

const TaskProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (Object.keys(state.tasks).length) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }, [state.tasks]);

  useEffect(() => {
    const storage = localStorage.getItem('tasks');

    if (storage) {
      dispatch({ type: ActionTypes.SET_TASKS, data: JSON.parse(storage) });
    }
  }, []);

  useEffect(() => {
    if (STEPS_DATA.length) {
      const lastStep = STEPS_DATA[STEPS_DATA.length - 1];

      const isCompleted = lastStep.tasks.every((item) =>
        state.tasks[lastStep.id]?.includes(item.id)
      );

      if (isCompleted) {
        getRandomFact().then((text) => {
          setTimeout(() => {
            localStorage.clear();
            alert(text);
            dispatch({ type: ActionTypes.SET_TASKS, data: {} });
          }, 100);
        });
      }
    }
  }, [state.tasks]);

  if (!STEPS_DATA.length) {
    return <p>Please initialize steps</p>;
  }

  return (
    <TaskStateContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>{children}</TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
};

const useTaskStateContext = (): State => {
  const context = useContext(TaskStateContext);

  if (typeof context === 'undefined') {
    throw new Error('useTaskStateContext must be used within a useTaskStateContext');
  }

  return context;
};

const useTaskDispatchContext = (): DispatchContext => {
  const dispatch = useContext(TaskDispatchContext);

  if (typeof dispatch === 'undefined') {
    throw new Error('useTaskDispatchContext must be used within a useTaskDispatchContext');
  }

  const toggleTask = useCallback(
    (step: number, value: number) => {
      dispatch({ type: ActionTypes.TOGGLE_TASK, data: { step, value } });
    },
    [dispatch]
  );

  const unselectStep = useCallback(
    (step: number) => {
      dispatch({ type: ActionTypes.UNSELECT_STEP, data: step });
    },
    [dispatch]
  );

  return { toggleTask, unselectStep };
};

export default TaskProvider;
export { useTaskDispatchContext, useTaskStateContext };
