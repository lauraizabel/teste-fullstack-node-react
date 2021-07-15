import { Request, Response } from "express";
import GetVehicleByNameUseCase from "./GetVehicleByNameUseCase";

export default class GetVehicleByNameController {
  constructor(private getVehicleByNameUseCase: GetVehicleByNameUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { query } = req;
    const { name } = query;

    try {
      const vehicle = await this.getVehicleByNameUseCase.execute(
        name.toString()
      );
      return res.status(200).json({ vehicle });
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
