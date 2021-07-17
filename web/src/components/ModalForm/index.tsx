import React, { useState } from 'react';
import * as yup from 'yup';
import { Modal, TextField, Switch, FormControlLabel } from '@material-ui/core';

import {
  Container,
  WrapperForm,
  ContainerDescription,
  ContainerButtons,
  Button,
} from './styles';
import { errorsYup } from '../../helpers/errorsYup';
import { errorsForm, form } from './ModalForm';
import { postVehicle } from '../../api/vehicles';

interface IModal {
  open: boolean;
  handleClose: () => void;
}

yup.setLocale(errorsYup);
interface IForm {
  vehicle: string;
  year: string;
  sold: boolean | string;
  description: string;
  brand: string;
}

const ModalForm: React.FC<IModal> = ({ open, handleClose }: IModal) => {
  const [formState, setFormState] = useState<IForm>({
    ...form,
  });
  const [errors, setErrors] = useState<IForm>({ ...errorsForm });

  const handleChangeForm = (field: string, event: React.ChangeEvent<any>) => {
    setFormState({ ...formState, [field]: event.target.value });
  };

  const handleChangeYear = (event: React.ChangeEvent<any>) => {
    setFormState({
      ...formState,
      year: event.target.value.replace(/\D/g, '').slice(0, 4),
    });
  };

  const handleChangeSold = (event: React.ChangeEvent<any>) => {
    setFormState({
      ...formState,
      sold: event.target.checked,
    });
  };

  const handleSubmit = async () => {
    try {
      const formSchema = yup.object().shape({
        vehicle: yup.string().required(),
        year: yup
          .number()
          .required()
          .min(1888)
          .max(new Date().getFullYear() + 1),
        sold: yup.boolean().required(),
        brand: yup.string().required(),
        description: yup.string().required(),
      });

      await formSchema.validate(formState);
      await postVehicle(formState);
    } catch (err) {
      if (err.path) {
        setErrors({ ...errorsForm, [err.path]: err.errors });
      }
    }
  };

  const onClose = () => {
    setFormState({ ...form });
    handleClose();
  };

  return (
    <Modal open={open} onClose={onClose} disableBackdropClick>
      <Container>
        <h1>Novo Veículo</h1>
        <WrapperForm>
          <TextField
            name="vehicle"
            placeholder="Veículo"
            label="Veículo"
            onChange={(event) => handleChangeForm(event.target.name, event)}
            value={formState.vehicle}
            error={errors.vehicle.length > 0}
            helperText={errors.vehicle}
          />

          <TextField
            name="brand"
            placeholder="Marca"
            label="Marca"
            value={formState.brand}
            onChange={(event) => handleChangeForm(event.target.name, event)}
            error={errors.brand.length > 0}
            helperText={errors.brand}
          />
        </WrapperForm>
        <WrapperForm>
          <TextField
            name="year"
            placeholder="Ano"
            label="Ano"
            value={formState.year}
            onChange={(event) => handleChangeYear(event)}
            error={errors.vehicle.length > 0}
            helperText={errors.year}
          />

          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="sold"
                value={formState.sold}
                onChange={(event) => handleChangeSold(event)}
              />
            }
            label="Vendido"
          />
        </WrapperForm>
        <ContainerDescription>
          <TextField
            name="description"
            placeholder="Descrição"
            label="Descrição"
            multiline
            rows={6}
            maxRows={10}
            value={formState.description}
            onChange={(event) => handleChangeForm(event.target.name, event)}
            error={errors.description.length > 0}
            helperText={errors.description}
          />
        </ContainerDescription>
        <ContainerButtons>
          <div>
            <Button onClick={handleSubmit}>ADD</Button>
            <Button onClick={onClose}>FECHAR</Button>
          </div>
        </ContainerButtons>
      </Container>
    </Modal>
  );
};

export default ModalForm;
