import { Router } from "express";
import createVehicleController from "./useCases/CreateVehicle";
import getAllVehiclesController from "./useCases/GetAllVehicles";
import getOneVehicleController from "./useCases/GetOneVehicle";

const router = Router();

router.get("/veiculos", getAllVehiclesController.handle);

router.get("/veiculos/find", getOneVehicleController.handle);

router.post("/veiculos", createVehicleController.handle);

export default router;
