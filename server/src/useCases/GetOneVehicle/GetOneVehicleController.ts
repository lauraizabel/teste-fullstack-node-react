import { Request, Response } from "express";
import GetOneVehicleUseCase from "./GetOneVehicleUseCase";

export default class GetOneVehicleController {
  constructor(private getOneVehicleUseCase: GetOneVehicleUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { query } = req;
    const { name } = query;

    try {
      const vehicle = await this.getOneVehicleUseCase.execute(name.toString());
      return res.status(200).json({ vehicle });
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
