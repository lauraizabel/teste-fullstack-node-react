import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import { VehicleAPI } from '../../@types';
import {
  fetchVehicles,
  fetchVehiclesByName,
  updateVehicle,
} from '../../api/vehicles';
import ButtonAdd from '../../components/ButtonAdd';
import DetailsVehicle from '../../components/DetailsVehicle';
import Layout from '../../components/Layout';
import ListVehicles from '../../components/ListVehicles';
import Form from '../../components/Form';
import { useSearchContext } from '../../context/searchContext';

import { Container, WrapperDescription, WrapperList } from './styles';

const Home: React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [vehicles, setVehicles] = useState<VehicleAPI[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleAPI>(
    vehicles[0],
  );
  const [edit, setEdit] = useState<boolean>(false);

  const { search } = useSearchContext();

  const handleOpen = () => setOpenForm(true);

  const handleFetchVehicles = async () => {
    try {
      const { data } = await fetchVehicles();
      setVehicles(data.allVehicles);
    } catch (error) {
      Swal.fire('Ops', 'Algo de errado aconteceu. Tente novamente.', 'error');
    }
  };

  const handleSelectVehicle = (vehicle: VehicleAPI) => {
    setSelectedVehicle(vehicle);
  };

  const handleSearch = async () => {
    try {
      const { data } = await fetchVehiclesByName(search);
      setVehicles(data.vehicle);
    } catch (error) {
      Swal.fire('Ops', 'Algo de errado aconteceu. Tente novamente.', 'error');
    }
  };

  const handleRefetch = () => {
    const isSearch = search.length > 0;
    if (isSearch) handleSearch();
    else handleFetchVehicles();
  };

  const handleClose = () => {
    setOpenForm(false);
    setEdit(false);
    handleRefetch();
  };

  const handleInitEdit = () => {
    setEdit(true);
    setOpenForm(true);
  };

  const handleClickSold = async (id: string, sold: boolean) => {
    try {
      await updateVehicle(id, { sold });
      handleRefetch();
    } catch (error) {
      Swal.fire('Ops', 'Algo de errado aconteceu. Tente novamente.', 'error');
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

  useEffect(() => {
    handleSearch();
  }, [search]);

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
            selectedVehicle={selectedVehicle}
            clickSold={handleClickSold}
          />
          <DetailsVehicle
            vehicle={selectedVehicle}
            handleSetEdit={handleInitEdit}
            clickSold={handleClickSold}
          />
        </WrapperList>
      </Container>
      <Form
        open={openForm}
        handleClose={handleClose}
        selectedVehicle={selectedVehicle}
        isEdit={edit}
      />
    </Layout>
  );
};

export default Home;
