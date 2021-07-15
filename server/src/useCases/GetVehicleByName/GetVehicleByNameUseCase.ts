import { IVehicleRepository } from "../../repositories/IVehicleRepository";
import VehicleModel from "../../repositories/models/vehicleModel";

export default class GetVehicleByNameUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  execute = async (name: string): Promise<VehicleModel[]> => {
    const vehicles = await this.vehicleRepository.findByName(name);

    return vehicles;
  };
}
