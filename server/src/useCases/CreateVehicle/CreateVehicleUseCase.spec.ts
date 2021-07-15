import VehicleRepositoryInMemory from "../../repositories/in-memory/VehicleRepositoryInMemory";
import CreateVehicleUseCase from "./CreateVehicleUseCase";

let createVehicleUseCase: CreateVehicleUseCase;
let vehicleRepositoryInMemory: VehicleRepositoryInMemory;

describe("Create Vehicle", () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    createVehicleUseCase = new CreateVehicleUseCase(vehicleRepositoryInMemory);
  });

  it("should be able to create new vehicle", async () => {
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

    const vehicleCreated = await vehicleRepositoryInMemory.findByName(
      vehicle.vehicle
    );

    expect(vehicleCreated[0].ano).toEqual(vehicle.year);
    expect(vehicleCreated[0].descricao).toEqual(vehicle.description);
    expect(vehicleCreated[0].veiculo).toEqual(vehicle.vehicle);
    expect(vehicleCreated[0].vendido).toEqual(vehicle.sold);
  });
});
