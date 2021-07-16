import React from 'react';

import {
  Container,
  ContainerLogo,
  SearchBarContainer,
  Wrapper,
  WrapperLogo,
  InputSearch,
} from './styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <ContainerLogo>
        <WrapperLogo>
          <Logo width={32} />
          FULLSTACK
        </WrapperLogo>
      </ContainerLogo>
      <SearchBarContainer>
        <InputSearch placeholder="BUSCA por um veículo" />
      </SearchBarContainer>
    </Wrapper>
  </Container>
);

export default Header;
