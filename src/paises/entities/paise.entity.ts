import { Entity, OneToMany } from 'typeorm';
import { Mask } from '../../mask/mask.entity';
import { ProvinciaLocalidad } from '../../provincia_localidad/entities/provincia_localidad.entity';
import { User } from '../../users/entities/user.entity';

@Entity('paise')
export class Paise extends Mask {
  @OneToMany(() => User, (user) => user.pais)
  user: User;

  @OneToMany(() => ProvinciaLocalidad, (provinciaYlocalidad) => provinciaYlocalidad.provLoc)
  provinciaYlocalidad: ProvinciaLocalidad;
}
