import { IVehicleRepository } from "../IVehicleRepository";
import VehicleModel from "../models/vehicleModel";

export default class VehicleRepositoryInMemory implements IVehicleRepository {
  vehicles: VehicleModel[] = [];

  async getAll() {
    const vehicles = this.vehicles;
    return vehicles;
  }

  async findByName(name: string) {
    const vehicle = this.vehicles.filter((vehicle) =>
      vehicle.veiculo.toLowerCase().includes(name.toLowerCase())
    );

    if (vehicle.length === 0) return null;

    return vehicle;
  }

  async save(data: VehicleModel) {
    const newVehicle = new VehicleModel({ ...data });
    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  async findById(id: number) {
    const vehicle = this.vehicles.filter((vehicle) => vehicle.id === id);

    if (vehicle.length === 0) return null;

    return vehicle[0];
  }

  async update(data: VehicleModel, id: number) {
    const vehicleIndex = this.vehicles.findIndex(
      (vehicle) => vehicle.id === id
    );
    this.vehicles[vehicleIndex] = data;
  }
}
