import React from 'react';
import ButtonEdit from '../ButtonEdit';

import {
  Container,
  WrapperDetails,
  ContainerSubDetails,
  ContainerDetails,
  ContainerActions,
} from './styles';
import { ReactComponent as SoldIcon } from '../../assets/sold-icon.svg';
import { VehicleAPI } from '../../@types';

interface IDetailsVehicleProps {
  vehicle: VehicleAPI | undefined;
}
const DetailsVehicle: React.FC<IDetailsVehicleProps> = ({
  vehicle,
}: IDetailsVehicleProps) => (
  <Container>
    <h3>Detalhes</h3>
    <WrapperDetails>
      <h1>{vehicle?.veiculo}</h1>
      <ContainerSubDetails>
        <div>
          <h2>Marca</h2>
          <h2>{vehicle?.marca}</h2>
        </div>
        <div>
          <h2>Ano</h2>
          <h2>{vehicle?.ano}</h2>
        </div>
      </ContainerSubDetails>
      <ContainerDetails>{vehicle?.descricao}</ContainerDetails>
      <ContainerActions>
        <ButtonEdit />
        <SoldIcon fill={vehicle?.vendido ? '#354046' : '#189c6c'} width={24} />
      </ContainerActions>
    </WrapperDetails>
  </Container>
);

export default DetailsVehicle;
