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
import { useSearchContext } from '../../context/searchContext';

const Header: React.FC = () => {
  const { setSearch } = useSearchContext();
  return (
    <Container>
      <Wrapper>
        <ContainerLogo>
          <WrapperLogo>
            <Logo width={32} />
            FULLSTACK
          </WrapperLogo>
        </ContainerLogo>
        <SearchBarContainer>
          <InputSearch
            placeholder="BUSCA por um veículo"
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchBarContainer>
      </Wrapper>
    </Container>
  );
};
export default Header;
