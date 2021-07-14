import VehicleRepository from "../../repositories/implementations/VehicleRepository";
import CreateVehicleController from "./CreateVehicleController";
import CreateVehicleUseCase from "./CreateVehiclesUseCase";

const vehicleRepository = new VehicleRepository();

const createVehicleUseCase = new CreateVehicleUseCase(vehicleRepository);

const createVehicleController = new CreateVehicleController(
  createVehicleUseCase
);

export default createVehicleController;
