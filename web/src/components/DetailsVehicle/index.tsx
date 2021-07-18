import React from 'react';
import { FaTag } from 'react-icons/fa';

import ButtonEdit from '../ButtonEdit';
import {
  Container,
  WrapperDetails,
  ContainerSubDetails,
  ContainerDetails,
  ContainerActions,
} from './styles';
import { VehicleAPI } from '../../@types';

interface IDetailsVehicleProps {
  vehicle: VehicleAPI;
  handleSetEdit: () => void;
  clickSold: (id: string, sold: boolean) => void;
}

const DetailsVehicle: React.FC<IDetailsVehicleProps> = ({
  vehicle,
  handleSetEdit,
  clickSold,
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
        <ButtonEdit onClick={handleSetEdit} />
        <FaTag
          fill={vehicle?.vendido ? '#189c6c' : '#354046'}
          size={24}
          onClick={() => clickSold(vehicle?.id.toString(), !vehicle?.vendido)}
        />
      </ContainerActions>
    </WrapperDetails>
  </Container>
);

export default DetailsVehicle;
