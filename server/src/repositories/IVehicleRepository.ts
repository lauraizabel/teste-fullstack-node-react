import VehicleModel from "./models/vehicleModel";

export interface IVehicleRepository {
  findByName(name: string): Promise<VehicleModel[]>;
  getAll(): Promise<VehicleModel[]>;
  save(data: VehicleModel): Promise<VehicleModel>;
}
