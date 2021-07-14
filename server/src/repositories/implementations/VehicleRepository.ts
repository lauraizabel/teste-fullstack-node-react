import { getRepository, Like } from "typeorm";
import { Vehicle } from "../../entities/vehicle";
import { IVehicleRepository } from "../IVehicleRepository";
import VehicleModel from "../models/vehicleModel";

export default class VehicleRepository implements IVehicleRepository {
  async getAll() {
    const vehicles = await getRepository(Vehicle).find();
    return vehicles;
  }

  async findByName(name: string) {
    const vehicle = await getRepository(Vehicle).find({
      veiculo: Like(`%${name}%`),
    });

    if (!vehicle) return null;

    return vehicle;
  }

  async save(data: VehicleModel) {
    const newVehicle = await getRepository(Vehicle).save(data);

    return newVehicle;
  }
}
