import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { Lenguaje } from './entities/lenguaje.entity';
import { LenguajesService } from './lenguajes.service';

@ApiTags('Lenguajes')
@ApiBearerAuth()
@Controller('lenguajes')
export class LenguajesController {
  constructor(private readonly lenguajesService: LenguajesService) {}

  @Post()
  createLenguaje(@Body() newLenguaje: CreateLenguajeDto): Promise<Lenguaje> {
    return this.lenguajesService.createLenguaje(newLenguaje);
  }

  @Get()
  getLenguajes(): Promise<Lenguaje[]> {
    return this.lenguajesService.getLenguajes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lenguajesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateLenguajeDto, @Res() res: Response) {
    return this.lenguajesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lenguajesService.remove(id);
  }
}
