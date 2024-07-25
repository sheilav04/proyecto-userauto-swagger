import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProvinciaDto {
  @ApiProperty()
  @IsString()
  nombre: string;
}
