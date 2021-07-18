import VehicleRepository from "../../repositories/implementations/VehicleRepository";
import UpdateVehicleController from "./UpdateVehicleController";
import UpdateVehicleUseCase from "./UpdateVehicleUseCase";

const vehicleRepository = new VehicleRepository();

const updateVehicleUseCase = new UpdateVehicleUseCase(vehicleRepository);

const updateVehicleController = new UpdateVehicleController(
  updateVehicleUseCase
);

export default updateVehicleController;
