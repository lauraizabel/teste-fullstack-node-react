import React from 'react';

import { MdModeEdit } from 'react-icons/md';
import { Container } from './styles';

interface IButtonEditProps {
  onClick?: () => void;
}

const ButtonEdit: React.FC<IButtonEditProps> = ({ onClick }) => (
  <Container onClick={onClick}>
    <MdModeEdit />
    EDITAR
  </Container>
);

export default ButtonEdit;
