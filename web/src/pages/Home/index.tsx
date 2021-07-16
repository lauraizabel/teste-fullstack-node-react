import React from 'react';
import ButtonAdd from '../../components/ButtonAdd';
import DetailsVehicle from '../../components/DetailsVehicle';
import Layout from '../../components/Layout';
import ListVehicles from '../../components/ListVehicles';

import { Container, WrapperDescription, WrapperList } from './styles';

const Home: React.FC = () => (
  <Layout>
    <Container>
      <WrapperDescription>
        <h3>VEÍCULO</h3>
        <ButtonAdd />
      </WrapperDescription>
      <WrapperList>
        <ListVehicles />
        <DetailsVehicle />
      </WrapperList>
    </Container>
  </Layout>
);

export default Home;
