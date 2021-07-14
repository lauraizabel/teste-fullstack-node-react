import VehicleModel from "./models/vehicles";

export interface IVehicleRepository {
  findById(id: number): Promise<VehicleModel>;
  getAll(): Promise<VehicleModel[]>;
  save(data: VehicleModel): Promise<VehicleModel>;
}
