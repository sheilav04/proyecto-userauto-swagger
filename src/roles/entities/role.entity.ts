import { Entity, OneToMany } from 'typeorm';
import { Mask } from '../../mask/mask.entity';
import { User } from '../../users/entities/user.entity';

@Entity('role')
export class Role extends Mask {
  @OneToMany(() => User, (user) => user.role)
  user: User;
}
