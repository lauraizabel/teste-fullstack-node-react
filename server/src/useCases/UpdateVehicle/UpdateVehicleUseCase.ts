import Vehicle from "../../repositories/models/vehicleModel";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";

export default class UpdateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  execute = async (
    year: number,
    description: string,
    vehicle: string,
    sold: boolean,
    brand: string,
    id: number
  ): Promise<any> => {
    if (year < 1888 || year > new Date().getFullYear() + 1) {
      throw new Error("Ano inválido.");
    }

    const oldVehicle = await this.vehicleRepository.findById(id);

    if (!oldVehicle) {
      throw new Error("ID inválido.");
    }

    const updatedVehicle = new Vehicle({
      ano: year || oldVehicle.ano,
      descricao: description || oldVehicle.descricao,
      veiculo: vehicle || oldVehicle.veiculo,
      vendido: sold || oldVehicle.vendido,
      marca: brand || oldVehicle.marca,
    });

    await this.vehicleRepository.update(updatedVehicle, id);
  };
}
