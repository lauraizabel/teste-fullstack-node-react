import { Request, Response } from "express";
import CreateVehicleUseCase from "./CreateVehicleUseCase";

export default class CreateVehicleController {
  constructor(private createVehicleUseCase: CreateVehicleUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const { year, description, vehicle, sold } = body;

    try {
      await this.createVehicleUseCase.execute(year, description, vehicle, sold);
      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
