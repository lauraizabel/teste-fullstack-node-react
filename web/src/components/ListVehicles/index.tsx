import React from 'react';
import { FaTag } from 'react-icons/fa';

import {
  Container,
  ContainerList,
  WrapperVehicle,
  SoldVehicle,
  DescriptionVehicle,
} from './styles';

import { VehicleAPI } from '../../@types';

interface IListVehiclesProps {
  vehicles: VehicleAPI[];
  onSelectVehicle: (vehicle: VehicleAPI) => void;
  selectedVehicle: VehicleAPI | undefined;
  clickSold: (id: string, sold: boolean) => void;
}

const ListVehicles: React.FC<IListVehiclesProps> = ({
  vehicles,
  onSelectVehicle,
  selectedVehicle,
  clickSold,
}: IListVehiclesProps) => (
  <Container>
    <h3>Lista de veículos</h3>
    <ContainerList>
      {vehicles.map((vh) => {
        const colorIcon = vh.vendido ? '#189c6c' : '#354046';
        return (
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
              <FaTag
                fill={colorIcon}
                size={24}
                onClick={() => clickSold(vh.id.toString(), !vh.vendido)}
              />
            </SoldVehicle>
          </WrapperVehicle>
        );
      })}
    </ContainerList>
  </Container>
);

export default ListVehicles;
