import { Request, Response } from "express";
import UpdateVehicleUseCase from "./UpdateVehicleUseCase";

export default class UpdateVehicleController {
  constructor(private updateVehicleUseCase: UpdateVehicleUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const { year, description, vehicle, sold, brand } = body;
    const { id } = params;

    try {
      await this.updateVehicleUseCase.execute(
        year,
        description,
        vehicle,
        sold,
        brand,
        Number(id)
      );
      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
