import { STEPS_DATA } from 'helpers/constants';
import { useTaskDispatchContext, useTaskStateContext } from 'providers/Tasks';
import { useCallback, useEffect, useMemo } from 'react';

const useCompletedStep = (id: number) => {
  const { tasks } = useTaskStateContext();
  const { unselectStep } = useTaskDispatchContext();

  const checkCompleted = useCallback(
    (stepId) => {
      const stepTasks = STEPS_DATA.find((item) => item.id === stepId)?.tasks;

      if (!stepTasks) return false;

      return stepTasks.every((item) => tasks[stepId]?.includes(item.id));
    },
    [tasks]
  );

  const isStepUnlocked = useMemo(() => {
    const index = STEPS_DATA.findIndex((item) => item.id === id);

    if (!index) return true;

    return checkCompleted(STEPS_DATA[index - 1].id);
  }, [checkCompleted, id]);

  useEffect(() => {
    if (!isStepUnlocked && tasks[id]?.length) {
      unselectStep(id);
    }
  }, [id, isStepUnlocked, tasks, unselectStep]);

  return { isCompleted: checkCompleted(id), isStepUnlocked };
};

export default useCompletedStep;
