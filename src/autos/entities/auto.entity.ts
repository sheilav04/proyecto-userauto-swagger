import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Marca } from '../../marcas/entities/marca.entity';
import { User } from '../../users/entities/user.entity';

@Entity('auto')
export class Auto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  modelo: string;

  @Column('text')
  color: string;

  @Column('text')
  patente: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  //campo de 'creado a', 'borrado a'
  //idMarca: Marca

  @OneToMany(() => User, (user) => user.auto)
  user: User;

  @OneToMany(() => Marca, (marca) => marca.auto)
  marca: Marca;
}
