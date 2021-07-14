import { IVehicleRepository } from "../../repositories/IVehicleRepository";

export default class GetVehicleByNameUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  execute = async (name: string): Promise<any> => {
    const vehicles = await this.vehicleRepository.findByName(name);

    return vehicles;
  };
}
