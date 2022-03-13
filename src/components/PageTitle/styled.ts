import styled, { css } from 'styled-components';

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.default};
    font-size: ${theme.sizes.xl};
    margin-bottom: ${theme.spaces.xl};
  `}
  font-weight: 700;
`;
