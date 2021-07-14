import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class VehicleModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  veiculo: string;

  @Column()
  descricao: string;

  @Column()
  ano: number;

  @Column({
    default: false,
  })
  vendido: boolean;

  @CreateDateColumn()
  created: Date;
}
