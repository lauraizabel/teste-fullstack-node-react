import VehicleModel from "./models/vehicleModel";

export interface IVehicleRepository {
  findByName(name: string): Promise<VehicleModel[]>;
  findById(id: number): Promise<VehicleModel>;
  getAll(): Promise<VehicleModel[]>;
  save(data: VehicleModel): Promise<VehicleModel>;
  update(data: VehicleModel, id: number): Promise<any>;
}
