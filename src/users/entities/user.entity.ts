import { Column, Entity, ManyToOne } from 'typeorm';
import { Auto } from '../../autos/entities/auto.entity';
import { Lenguaje } from '../../lenguajes/entities/lenguaje.entity';
import { Mask } from '../../mask/mask.entity';
import { Paise } from '../../paises/entities/paise.entity';
import { Role } from '../../roles/entities/role.entity';

@Entity({ name: 'users' })
export class User extends Mask {
  @Column('varchar')
  apellido: string;

  @Column('int')
  dni: number;

  @ManyToOne(() => Paise, (pais) => pais.user)
  pais: Paise;

  //@ManyToOne(() => Provincia, (provincia) => provincia.user)
  //provincia: Provincia;

  //@ManyToOne(() => Localidade, (localidad) => localidad.user)
  //localidad: Localidade;

  @Column('varchar')
  direccion: string;

  @ManyToOne(() => Auto, (auto) => auto.user)
  auto: Auto;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @ManyToOne(() => Lenguaje, (lenguaje) => lenguaje.user)
  lenguaje: Lenguaje;
}
