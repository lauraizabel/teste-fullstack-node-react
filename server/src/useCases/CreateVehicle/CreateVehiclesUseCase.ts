import Vehicle from "../../repositories/models/vehicleModel";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";

export default class CreateVehiclesUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  execute = async (
    year: number,
    description: string,
    vehicle: string,
    sold: boolean
  ): Promise<any> => {
    const newVehicle = new Vehicle({
      ano: year,
      descricao: description,
      vendido: sold,
      veiculo: vehicle,
    });

    await this.vehicleRepository.save(newVehicle);
  };
}
