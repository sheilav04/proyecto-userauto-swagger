import { PartialType } from '@nestjs/swagger';
import { CreateProvinciaLocalidadDto } from './create-provincia_localidad.dto';

export class UpdateProvinciaLocalidadDto extends PartialType(CreateProvinciaLocalidadDto) {}
