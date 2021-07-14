import VehicleRepository from "../../repositories/implementations/VehicleRepository";
import GetVehicleByNameController from "./GetVehicleByNameController";
import GetVehicleByNameUseCase from "./GetVehicleByNameUseCase";

const vehicleRepository = new VehicleRepository();

const getVehicleByNameUseCase = new GetVehicleByNameUseCase(vehicleRepository);

const getVehicleByNameController = new GetVehicleByNameController(
  getVehicleByNameUseCase
);

export default getVehicleByNameController;
