import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAutoDto {
  @ApiProperty()
  @IsString()
  modelo: string;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsString()
  patente: string;
}
