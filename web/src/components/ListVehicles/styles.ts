import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
`;

export const ContainerList = styled.div`
  margin-top: 12px;
  max-height: 600px;
  overflow-y: auto;
`;

export const SoldVehicle = styled.div`
  svg {
    cursor: pointer;
  }
  display: flex;
`;

export const DescriptionVehicle = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: #364147;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  h3 {
    color: #1d7555;
    font-size: 18px;
    margin-bottom: 8px;
  }

  h4 {
    color: #798083;
    font-weight: 100;
  }
`;

export const WrapperVehicle = styled.div`
  /* width: 100%; */
  height: 100px;
  background-color: #ffff;
  display: flex;
  margin-bottom: 18px;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f1f2f0;
    transition: 0.2s;
  }
`;
