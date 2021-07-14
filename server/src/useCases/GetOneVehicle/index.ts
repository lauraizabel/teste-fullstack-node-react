import VehicleRepository from "../../repositories/implementations/VehicleRepository";
import GetOneVehicleController from "./GetOneVehicleController";
import GetOneVehicleUseCase from "./GetOneVehicleUseCase";

const vehicleRepository = new VehicleRepository();

const getOneVehicleUseCase = new GetOneVehicleUseCase(vehicleRepository);

const getOneVehicleController = new GetOneVehicleController(
  getOneVehicleUseCase
);

export default getOneVehicleController;
