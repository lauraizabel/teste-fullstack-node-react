import { Router } from "express";
import createVehicleController from "./useCases/CreateVehicle";
import getAllVehiclesController from "./useCases/GetAllVehicles";
import getVehicleByNameController from "./useCases/GetVehicleByName";

const router = Router();

router.get("/veiculos", getAllVehiclesController.handle);

router.get("/veiculos/find", getVehicleByNameController.handle);

router.post("/veiculos", createVehicleController.handle);

export default router;
