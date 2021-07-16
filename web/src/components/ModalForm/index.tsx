import React from 'react';
import { Modal, TextField, Switch, FormControlLabel } from '@material-ui/core';

import {
  Container,
  WrapperForm,
  ContainerDescription,
  ContainerButtons,
  Button,
} from './styles';

interface IModal {
  open: boolean;
  handleClose: () => void;
}

const ModalForm: React.FC<IModal> = ({ open, handleClose }: IModal) => (
  <Modal open={open} onClose={handleClose}>
    <Container>
      <h1>Novo Veículo</h1>
      <WrapperForm>
        <TextField name="vehicle" placeholder="Veículo" label="Veículo" />
        <TextField name="vehicle" placeholder="Marca" label="Marca" />
      </WrapperForm>
      <WrapperForm>
        <TextField name="vehicle" placeholder="Ano" label="Ano" />
        <FormControlLabel
          control={<Switch defaultChecked color="default" />}
          label="Vendido"
        />
      </WrapperForm>
      <ContainerDescription>
        <TextField
          name="vehicle"
          placeholder="Descrição"
          label="Descrição"
          multiline
          rows={6}
          maxRows={10}
        />
      </ContainerDescription>
      <ContainerButtons>
        <div>
          <Button>ADD</Button>
          <Button onClick={handleClose}>FECHAR</Button>
        </div>
      </ContainerButtons>
    </Container>
  </Modal>
);

export default ModalForm;
