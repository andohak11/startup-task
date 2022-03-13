import { FC } from 'react';
import { TaskItem } from 'components';
import { Check } from 'icons';

import { StepNumber, StepTitle, StepTitleLeft, StyledStep, TasksContainer } from './styled';
import { IStepProps } from './types';
import useCompletedStep from 'hooks/useCompletedStep';

const Step: FC<IStepProps> = ({ id, title, num, tasks }) => {
  const { isCompleted, isStepUnlocked } = useCompletedStep(id);

  return (
    <StyledStep>
      <StepTitle>
        <StepTitleLeft>
          <StepNumber>{num}</StepNumber>
          {title}
        </StepTitleLeft>
        {isCompleted && <Check width={30} height={30} />}
      </StepTitle>
      <TasksContainer>
        {tasks.map((task) => (
          <TaskItem
            key={`task-${id}-${task.id}`}
            title={task.title}
            id={task.id}
            step={id}
            disabled={!isStepUnlocked}
          />
        ))}
      </TasksContainer>
    </StyledStep>
  );
};

export default Step;
