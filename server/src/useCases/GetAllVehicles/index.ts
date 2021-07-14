import VehicleRepository from "../../repositories/implementations/VehicleRepository";
import GetAllVehiclesController from "./GetAllVehiclesController";
import GetAllVehiclesUseCase from "./GetAllVehiclesUseCase";

const vehicleRepository = new VehicleRepository();

const getAllVehiclesUseCase = new GetAllVehiclesUseCase(vehicleRepository);

const getAllVehiclesController = new GetAllVehiclesController(
  getAllVehiclesUseCase
);

export default getAllVehiclesController;
