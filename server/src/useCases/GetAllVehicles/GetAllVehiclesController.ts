import { Request, Response } from "express";
import GetAllVehiclesUseCase from "./GetAllVehiclesUseCase";

export default class GetAllVehiclesController {
  constructor(private getAllVehiclesUseCase: GetAllVehiclesUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const allVehicles = await this.getAllVehiclesUseCase.execute();
      return res.status(200).json({ allVehicles });
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
