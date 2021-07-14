export default class Vehicle {
  public id?: number;

  public veiculo: string;

  public ano: number;

  public descricao: string;

  public vendido: boolean;

  public created: Date;

  constructor(props: Vehicle) {
    Object.assign(this, props);
  }
}
