import { IVehicleRepository } from "../../repositories/IVehicleRepository";

export default class GetAllVehicles {
  constructor(private vehicleRepository: IVehicleRepository) {}

  execute = async (): Promise<any> => {
    const vehicles = await this.vehicleRepository.getAll();

    return vehicles;
  };
}
