import { Request, Response } from "express";
import GetOneVehicleUseCase from "./GetOneVehicleUseCase";

export default class GetOneVehicleController {
  constructor(private getOneVehicleUseCase: GetOneVehicleUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { params } = req;
    const { id } = params;

    try {
      const vehicle = await this.getOneVehicleUseCase.execute(Number(id));
      return res.status(200).json({ vehicle });
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
