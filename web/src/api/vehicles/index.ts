import HttpClient from '../httpClient';

export const postVehicle = async (data: any) =>
  HttpClient.post('veiculos', data);

export const fetchVehicles = async () => HttpClient.get('veiculos');

export const fetchVehiclesByNamae = async (name: string) =>
  HttpClient.get(`veiculos/find?name=${name}`);
