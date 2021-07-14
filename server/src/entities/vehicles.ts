export default class Vehicles {
  public id?: number;

  public veiculo: string;

  public ano: number;

  public descricao: string;

  public vendido: boolean;

  public created: Date;

  constructor(props: Vehicles) {
    Object.assign(this, props);
  }
}
