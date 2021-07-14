import Vehicle from "../entities/vehicles";

export interface IVehicleRepository {
  findById(id: number): Promise<Vehicle>;
  getAll(): Promise<Vehicle[]>;
  save(data: Vehicle): Promise<Vehicle>;
}
