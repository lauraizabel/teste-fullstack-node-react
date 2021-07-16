import React from 'react';

import {
  Container,
  ContainerList,
  WrapperVehicle,
  SoldVehicle,
  DescriptionVehicle,
} from './styles';

import Mock from '../../api/mock.json';
import { ReactComponent as SoldIcon } from '../../assets/sold-icon.svg';

const ListVehicles: React.FC = () => {
  const data = Mock;

  return (
    <Container>
      <h3>Lista de veículos</h3>
      <ContainerList>
        {data.map((dt) => (
          <WrapperVehicle>
            <DescriptionVehicle>
              <h1>{dt.marca}</h1>
              <h3>{dt.veiculo}</h3>
              <h4>{2016}</h4>
            </DescriptionVehicle>
            <SoldVehicle>
              <SoldIcon fill="#354046" width={24} />
            </SoldVehicle>
          </WrapperVehicle>
        ))}
      </ContainerList>
    </Container>
  );
};

export default ListVehicles;
