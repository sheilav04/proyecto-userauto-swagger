import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLenguajeDto {
  @ApiProperty()
  @IsString()
  nombre: string;
}
