import { Check } from 'icons';
import { useTaskDispatchContext, useTaskStateContext } from 'providers/Tasks';
import { memo, FC, useMemo, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme } from 'theme';

import { Checkbox, StyledTaskItem } from './styled';
import { ITaskItemProps } from './types';

const TaskItem: FC<ITaskItemProps> = ({ step, title, id, disabled }) => {
  // context
  const { toggleTask } = useTaskDispatchContext();
  const { tasks } = useTaskStateContext();

  const theme: Theme = useContext(ThemeContext);

  const isChecked = useMemo(() => tasks[step]?.includes(id) || false, [id, step, tasks]);

  return (
    <StyledTaskItem disabled={disabled}>
      <input
        type="checkbox"
        onChange={(e) => toggleTask(step, +e.target.value)}
        value={id}
        checked={isChecked}
        disabled={disabled}
        id={`${step}-${id}`}
        hidden
      />
      <Checkbox htmlFor={`${step}-${id}`}>
        <Check fill={theme.white} width={10} height={10} />
      </Checkbox>
      {title}
    </StyledTaskItem>
  );
};

export default memo(TaskItem);
