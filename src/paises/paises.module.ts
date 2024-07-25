import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Localidade } from '../localidades/entities/localidade.entity';
import { ProvinciaLocalidad } from '../provincia_localidad/entities/provincia_localidad.entity';
import { Provincia } from '../provincias/entities/provincia.entity';
import { Paise } from './entities/paise.entity';
import { PaisesController } from './paises.controller';
import { PaisesService } from './paises.service';

@Module({
  imports: [TypeOrmModule.forFeature([Paise, Localidade, Provincia, ProvinciaLocalidad])],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class PaisesModule {}
