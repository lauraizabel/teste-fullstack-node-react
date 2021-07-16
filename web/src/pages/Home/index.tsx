import React, { useState } from 'react';

import ButtonAdd from '../../components/ButtonAdd';
import DetailsVehicle from '../../components/DetailsVehicle';
import Layout from '../../components/Layout';
import ListVehicles from '../../components/ListVehicles';
import ModalForm from '../../components/ModalForm';

import { Container, WrapperDescription, WrapperList } from './styles';

const Home: React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);

  const handleClose = () => setOpenForm(false);

  const handleOpen = () => setOpenForm(true);

  return (
    <Layout>
      <Container>
        <WrapperDescription>
          <h3>VEÍCULO</h3>
          <ButtonAdd onClick={handleOpen} />
        </WrapperDescription>
        <WrapperList>
          <ListVehicles />
          <DetailsVehicle />
        </WrapperList>
      </Container>
      <ModalForm open={openForm} handleClose={handleClose} />
    </Layout>
  );
};

export default Home;
