import React, { useState, useEffect } from 'react';

import { VehicleAPI } from '../../@types';
import { fetchVehicles } from '../../api/vehicles';
import ButtonAdd from '../../components/ButtonAdd';
import DetailsVehicle from '../../components/DetailsVehicle';
import Layout from '../../components/Layout';
import ListVehicles from '../../components/ListVehicles';
import ModalForm from '../../components/ModalForm';

import { Container, WrapperDescription, WrapperList } from './styles';

const Home: React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [vehicles, setVehicles] = useState<VehicleAPI[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleAPI>();
  const handleClose = () => setOpenForm(false);

  const handleOpen = () => setOpenForm(true);

  const handleFetchVehicles = async () => {
    try {
      const { data } = await fetchVehicles();
      setVehicles(data.allVehicles);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchVehicles();
  }, []);

  useEffect(() => {
    if (vehicles?.length > 0) {
      setSelectedVehicle(vehicles[0]);
    }
  }, [vehicles]);

  const handleSelectVehicle = (vehicle: VehicleAPI) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <Layout>
      <Container>
        <WrapperDescription>
          <h3>VEÍCULO</h3>
          <ButtonAdd onClick={handleOpen} />
        </WrapperDescription>
        <WrapperList>
          <ListVehicles
            vehicles={vehicles}
            onSelectVehicle={handleSelectVehicle}
          />
          <DetailsVehicle vehicle={selectedVehicle} />
        </WrapperList>
      </Container>
      <ModalForm open={openForm} handleClose={handleClose} />
    </Layout>
  );
};

export default Home;
