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

const DetailsVehicle: React.FC = () => (
  <Container>
    <h3>Detalhes</h3>
    <WrapperDetails>
      <h1>PALIO</h1>
      <ContainerSubDetails>
        <div>
          <h2>Marca</h2>
          <h2>FIAT</h2>
        </div>
        <div>
          <h2>Ano</h2>
          <h2>2016</h2>
        </div>
      </ContainerSubDetails>
      <ContainerDetails>
        O Palio é um automóvel compacto produzido pela Fiat, tendo sido
        projetado para Mercados emergentes os da América Latina, África do Sul,
        Leste Europeu e alguns países Asiáticos. Seu projeto foi iniciado em
        1992, pelo Centro de Estilo da Fiat junto ao estúdio I.DE.A. A Fiat já
        contava com um produto de tamanho similar para o mercado europeu, o
        Punto, lançado em 1993 para substituir o Uno, que já contava com 12 anos
        de mercado. O projeto, chamado de 178, teria uma suspensão mais simples
        e robusta e, ao contrário do Punto, daria origem uma grande família de
        produtos.
      </ContainerDetails>
      <ContainerActions>
        <ButtonEdit />
        <SoldIcon fill="#354046" width={24} />
      </ContainerActions>
    </WrapperDetails>
  </Container>
);

export default DetailsVehicle;
