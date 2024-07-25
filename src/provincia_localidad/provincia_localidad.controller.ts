import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvinciaLocalidadService } from './provincia_localidad.service';
import { CreateProvinciaLocalidadDto } from './dto/create-provincia_localidad.dto';
import { UpdateProvinciaLocalidadDto } from './dto/update-provincia_localidad.dto';

@Controller('provincia-localidad')
export class ProvinciaLocalidadController {
  constructor(private readonly provinciaLocalidadService: ProvinciaLocalidadService) {}

  @Post()
  create(@Body() createProvinciaLocalidadDto: CreateProvinciaLocalidadDto) {
    return this.provinciaLocalidadService.create(createProvinciaLocalidadDto);
  }

  @Get()
  findAll() {
    return this.provinciaLocalidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provinciaLocalidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvinciaLocalidadDto: UpdateProvinciaLocalidadDto) {
    return this.provinciaLocalidadService.update(+id, updateProvinciaLocalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provinciaLocalidadService.remove(+id);
  }
}
