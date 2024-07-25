import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  apellido: string;

  @ApiProperty()
  @IsNumber()
  dni: number;

  @ApiProperty()
  @IsString()
  direccion: string;

  //idLocalizacion: Pais
}
