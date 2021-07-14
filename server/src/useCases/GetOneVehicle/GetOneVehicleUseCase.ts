import { IVehicleRepository } from "../../repositories/IVehicleRepository";

export default class GetOneVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  execute = async (id: number): Promise<any> => {
    const vehicle = await this.vehicleRepository.findById(id);

    return vehicle;
  };
}
