import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paise } from '../paises/entities/paise.entity';
import { ProvinciaLocalidad } from './entities/provincia_localidad.entity';
import { ProvinciaLocalidadController } from './provincia_localidad.controller';
import { ProvinciaLocalidadService } from './provincia_localidad.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinciaLocalidad, Paise])],
  controllers: [ProvinciaLocalidadController],
  providers: [ProvinciaLocalidadService],
})
export class ProvinciaLocalidadModule {}
