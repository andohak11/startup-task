import styled, { css } from 'styled-components';

export const StyledStep = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.lg};
`;

export const StepTitle = styled.h6`
  ${({ theme }) => css`
    color: ${theme.default};
    font-size: ${theme.sizes.xl};
    margin-bottom: ${theme.spaces.lg};
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;

export const StepTitleLeft = styled.span`
  display: flex;
  align-items: center;
`;

export const StepNumber = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spaces.base};
    font-size: ${theme.sizes.base};
    color: ${theme.white};
    background-color: ${theme.default};
  `}
  border-radius: 50%;
  width: 33px;
  height: 33px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TasksContainer = styled.div`
  padding-left: ${({ theme }) => theme.spaces.base};
`;
