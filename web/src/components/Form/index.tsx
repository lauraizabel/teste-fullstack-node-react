import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';

import {
  Container,
  WrapperForm,
  ContainerDescription,
  ContainerButtons,
  Button,
} from './styles';
import { errorsYup } from '../../helpers/errorsYup';
import { errorsForm, form } from './ModalForm';
import { postVehicle, updateVehicle } from '../../api/vehicles';
import { Vehicle, VehicleAPI } from '../../@types';

import Modal from '../Modal';

interface IFormProps {
  open: boolean;
  handleClose: () => void;
  selectedVehicle: VehicleAPI;
  isEdit: boolean;
}

yup.setLocale(errorsYup);

const Form: React.FC<IFormProps> = ({
  open,
  handleClose,
  isEdit,
  selectedVehicle,
}: IFormProps) => {
  const [formState, setFormState] = useState<Vehicle>({
    ...form,
  });
  const [errors, setErrors] = useState<Vehicle>({ ...errorsForm });

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
      if (isEdit)
        await updateVehicle(selectedVehicle?.id.toString(), formState);
      else await postVehicle(formState);
      handleClose();
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

  const handleStartInit = () => {
    const newForm: any = { ...form };

    newForm.brand = selectedVehicle?.marca;
    newForm.vehicle = selectedVehicle?.veiculo;
    newForm.sold = selectedVehicle?.vendido;
    newForm.year = selectedVehicle?.ano;
    newForm.description = selectedVehicle?.descricao;

    setFormState({ ...newForm });
  };

  useEffect(() => {
    if (isEdit) handleStartInit();
  }, [isEdit]);

  return (
    <Modal open={open} handleClose={onClose}>
      <Container>
        <h1>{isEdit ? 'Editar' : 'Novo'} Veículo</h1>
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

export default Form;
