import { Entity, OneToMany } from 'typeorm';
import { Auto } from '../../autos/entities/auto.entity';
import { Mask } from '../../mask/mask.entity';

@Entity('marca')
export class Marca extends Mask {
  @OneToMany(() => Auto, (auto) => auto.marca)
  auto: Auto;
}
