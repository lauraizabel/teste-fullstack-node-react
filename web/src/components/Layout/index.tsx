import React from 'react';
import Header from '../Header';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Layout;
