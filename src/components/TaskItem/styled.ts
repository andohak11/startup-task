import styled, { css } from 'styled-components';

export const Checkbox = styled.label`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.borderColor};
  margin-right: ${({ theme }) => theme.sizes.sm};
  transition: all 0.2s;
  svg {
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

export const StyledTaskItem = styled.label<{ disabled: boolean }>`
  margin-bottom: ${({ theme }) => theme.sizes.sm};
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  input:checked {
    & ~ ${Checkbox} {
      ${({ theme }) => css`
        background-color: ${theme.primary};
        border-color: ${theme.primary};
        svg {
          opacity: 1;
        }
      `}
    }
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
`;
