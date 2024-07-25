import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateLocalidadeDto } from './dto/create-localidade.dto';
import { UpdateLocalidadeDto } from './dto/update-localidade.dto';
import { LocalidadesService } from './localidades.service';

@Controller('localidades')
export class LocalidadesController {
  constructor(private readonly localidadesService: LocalidadesService) {}

  @Post()
  create(@Body() newLocalidad: CreateLocalidadeDto) {
    return this.localidadesService.createLocalidad(newLocalidad);
  }

  @Get()
  getLocalidad() {
    return this.localidadesService.getLocalidad();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localidadesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocalidadeDto: UpdateLocalidadeDto) {
    return this.localidadesService.update(id, updateLocalidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localidadesService.remove(id);
  }
}
