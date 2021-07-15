import VehicleRepositoryInMemory from "../../repositories/in-memory/VehicleRepositoryInMemory";
import GetVehicleByNameUseCase from "./GetVehicleByNameUseCase";
import CreateVehicleUseCase from "../CreateVehicle/CreateVehicleUseCase";

let getVehicleByNameUseCase: GetVehicleByNameUseCase;
let createVehicleUseCase: CreateVehicleUseCase;
let vehicleRepositoryInMemory: VehicleRepositoryInMemory;

describe("Get All Vehicles", () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    getVehicleByNameUseCase = new GetVehicleByNameUseCase(
      vehicleRepositoryInMemory
    );
    createVehicleUseCase = new CreateVehicleUseCase(vehicleRepositoryInMemory);
  });

  it("should be able to return a list of vehicles with vehicle name", async () => {
    const vehicle = {
      year: 2000,
      description: "Car Test Description",
      vehicle: "Car Test",
      sold: false,
    };

    await createVehicleUseCase.execute(
      vehicle.year,
      vehicle.description,
      vehicle.vehicle,
      vehicle.sold
    );

    const listVehicleWithName = await getVehicleByNameUseCase.execute(
      vehicle.vehicle
    );

    expect(listVehicleWithName[0].veiculo).toContain(vehicle.vehicle);
  });
});
