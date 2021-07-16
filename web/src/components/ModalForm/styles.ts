import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e2e4e1;
  width: 60%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 32px;
`;

export const WrapperForm = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const ContainerDescription = styled.div`
  div {
    width: 100%;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  button:nth-child(1) {
    margin-right: 12px;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #45535a;
  text-align: center;
  padding: 12px 24px;
  color: #fff;
  cursor: pointer;
`;
