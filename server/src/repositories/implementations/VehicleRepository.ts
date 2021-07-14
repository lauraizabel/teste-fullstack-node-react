import { getRepository } from "typeorm";
import { VehicleModel } from "../models/vehicleModel";
import { IVehicleRepository } from "../IVehicleRepository";
import Vehicle from "../../entities/vehicles";

const vehicleRepository = getRepository(VehicleModel);

export default class VehicleRepository implements IVehicleRepository {
  async getAll() {
    const vehicles = vehicleRepository.find();
    return vehicles;
  }

  async findById(id: number) {
    const vehicle = await vehicleRepository.findOne({ id });
    if (!vehicle) return null;
    return vehicle;
  }

  async save(data: Vehicle) {
    const newVehicle = await vehicleRepository.save({ ...data });
    return newVehicle;
  }
}
