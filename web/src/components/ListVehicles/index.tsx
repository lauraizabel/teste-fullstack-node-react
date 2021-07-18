import React from 'react';

import {
  Container,
  ContainerList,
  WrapperVehicle,
  SoldVehicle,
  DescriptionVehicle,
} from './styles';

import { ReactComponent as SoldIcon } from '../../assets/sold-icon.svg';
import { VehicleAPI } from '../../@types';

interface IListVehiclesProps {
  vehicles: VehicleAPI[];
  onSelectVehicle: (vehicle: VehicleAPI) => void;
  selectedVehicle: VehicleAPI | undefined;
}

const ListVehicles: React.FC<IListVehiclesProps> = ({
  vehicles,
  onSelectVehicle,
  selectedVehicle,
}: IListVehiclesProps) => (
  <Container>
    <h3>Lista de veículos</h3>
    <ContainerList>
      {vehicles.map((vh) => (
        <WrapperVehicle
          onClick={() => onSelectVehicle(vh)}
          isSelected={selectedVehicle?.id === vh.id}
        >
          <DescriptionVehicle>
            <h1>{vh.marca}</h1>
            <h3>{vh.veiculo}</h3>
            <h4>{vh.ano}</h4>
          </DescriptionVehicle>
          <SoldVehicle>
            <SoldIcon fill={vh.vendido ? '#354046' : '#189c6c'} width={24} />
          </SoldVehicle>
        </WrapperVehicle>
      ))}
    </ContainerList>
  </Container>
);

export default ListVehicles;
