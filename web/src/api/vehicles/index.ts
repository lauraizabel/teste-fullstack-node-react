import HttpClient from '../httpClient';

export const postVehicle = async (data: any) =>
  HttpClient.post('veiculos', data);

export const fetchVehicles = async () => HttpClient.get('veiculos');

export const fetchVehiclesByName = async (name: string) =>
  HttpClient.get(`veiculos/find?name=${name}`);

export const updateVehicle = async (id: string, data: any) =>
  HttpClient.put(`veiculo/${id}`, data);
