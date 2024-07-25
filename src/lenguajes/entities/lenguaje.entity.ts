import { Entity, OneToMany } from 'typeorm';
import { Mask } from '../../mask/mask.entity';
import { User } from '../../users/entities/user.entity';

@Entity('lenguaje')
export class Lenguaje extends Mask {
  @OneToMany(() => User, (user) => user.lenguaje)
  user: User;
}
