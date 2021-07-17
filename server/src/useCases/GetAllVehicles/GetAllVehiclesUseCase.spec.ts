import VehicleRepositoryInMemory from "../../repositories/in-memory/VehicleRepositoryInMemory";
import GetAllVehiclesUseCase from "./GetAllVehiclesUseCase";
import CreateVehicleUseCase from "../CreateVehicle/CreateVehicleUseCase";

let getAllVehiclesUseCase: GetAllVehiclesUseCase;
let createVehicleUseCase: CreateVehicleUseCase;
let vehicleRepositoryInMemory: VehicleRepositoryInMemory;

describe("Get All Vehicles", () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    getAllVehiclesUseCase = new GetAllVehiclesUseCase(
      vehicleRepositoryInMemory
    );
    createVehicleUseCase = new CreateVehicleUseCase(vehicleRepositoryInMemory);
  });

  it("should be able to return a list of vehicles", async () => {
    const vehicle = {
      year: 2000,
      description: "Car Test Description",
      vehicle: "Car Test",
      sold: false,
      brand: "Car",
    };

    await createVehicleUseCase.execute(
      vehicle.year,
      vehicle.description,
      vehicle.vehicle,
      vehicle.sold,
      vehicle.brand
    );

    const vehicles = await getAllVehiclesUseCase.execute();

    expect(vehicles.length).toEqual(1);

    await createVehicleUseCase.execute(
      vehicle.year,
      vehicle.description,
      vehicle.vehicle,
      vehicle.sold,
      vehicle.brand
    );

    await createVehicleUseCase.execute(
      vehicle.year,
      vehicle.description,
      vehicle.vehicle,
      vehicle.sold,
      vehicle.brand
    );

    expect(vehicles.length).toEqual(3);
  });
});
