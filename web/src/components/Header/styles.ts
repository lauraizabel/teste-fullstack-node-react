import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #364147;
  color: #ffff;
  height: 80px;
`;

export const Wrapper = styled.div`
  /* width: 90%; */
  height: 100%;
  /* max-width: 1250px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  height: 100%;
  font-size: 24px;
  margin: 0 auto;
  svg {
    margin-right: 12px;
    font-size: 36px;
  }
`;

export const WrapperLogo = styled.div`
  width: 90%;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
  }
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  background-color: #2a3138;
  height: 100%;
  width: 100%;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  font-size: 24px;
  outline: none;
  color: #dadada;
`;
