import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLocalidadeDto {
  @ApiProperty()
  @IsString()
  nombre: string;
}
