import { FC } from 'react';

import { LayoutContent, StyledLayout } from './styled';

const Layout: FC = ({ children }) => (
  <StyledLayout>
    <LayoutContent>{children}</LayoutContent>
  </StyledLayout>
);

export default Layout;
