import React from 'react';

import { Container } from './styles';

interface IButtonAdd {
  onClick: () => void;
}

const ButtonAdd: React.FC<IButtonAdd> = ({ onClick }: IButtonAdd) => (
  <Container onClick={onClick}>+</Container>
);

export default ButtonAdd;
