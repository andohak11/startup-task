import styled, { css } from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
`;
export const LayoutContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.white};
    padding: ${theme.sizes.lg};
  `}
  border-radius: 10px;
  width: 100%;
  max-width: 320px;
`;
