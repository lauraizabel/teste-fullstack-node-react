export default class VehicleModel {
  public id?: number;

  public veiculo: string;

  public ano: number;

  public descricao: string;

  public vendido: boolean;

  public created?: Date;

  constructor(props: VehicleModel) {
    Object.assign(this, props);
  }
}
