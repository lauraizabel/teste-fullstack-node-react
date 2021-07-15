import { IVehicleRepository } from "../../repositories/IVehicleRepository";
import VehicleModel from "../../repositories/models/vehicleModel";

export default class GetAllVehicles {
  constructor(private vehicleRepository: IVehicleRepository) {}

  execute = async (): Promise<VehicleModel[]> => {
    const vehicles = await this.vehicleRepository.getAll();

    return vehicles;
  };
}
