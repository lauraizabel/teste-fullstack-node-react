import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
`;

export const WrapperDetails = styled.div`
  margin-top: 12px;
  background-color: #fff;
  height: 90%;
  padding: 12px;
  position: relative;
  h1 {
    color: #4c8d74;
  }
`;

export const ContainerSubDetails = styled.div`
  margin-top: 24px;
  font-size: 12px;
  display: grid;
  width: 90%;
  grid-template-columns: repeat(2, 1fr);
  div {
    h2:nth-child(1) {
      color: #364147;
    }
  }
`;

export const ContainerDetails = styled.div`
  color: #454545;
  margin-top: 24px;
  padding-bottom: 12px;
  font-weight: 400;
  line-height: 28px;
  white-space: pre-line;
`;

export const ContainerActions = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  padding-top: 16px;
  position: absolute;
  width: 95%;
  bottom: 22px;
  svg {
    cursor: pointer;
  }
`;
