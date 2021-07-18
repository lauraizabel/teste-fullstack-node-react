import Vehicle from "../../repositories/models/vehicleModel";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";

export default class CreateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  execute = async (
    year: number,
    description: string,
    vehicle: string,
    sold: boolean,
    brand: string
  ): Promise<any> => {
    if (year < 1888 || year > new Date().getFullYear() + 1) {
      throw new Error("Ano inválido.");
    }

    const newVehicle = new Vehicle({
      ano: year,
      descricao: description,
      vendido: sold,
      veiculo: vehicle,
      marca: brand,
    });

    await this.vehicleRepository.save(newVehicle);
  };
}
