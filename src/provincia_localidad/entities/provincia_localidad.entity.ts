import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('provincia_localidad')
export class ProvinciaLocalidad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //@ManyToOne(() => Provincia)
  //provincia: Provincia;

  //@ManyToOne(() => Localidade)
  //localidad: Localidade;

  @ManyToOne(() => ProvinciaLocalidad)
  provLoc: ProvinciaLocalidad;
}
