import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { ProvinciasService } from './provincias.service';

@Controller('provincias')
export class ProvinciasController {
  constructor(private readonly provinciasService: ProvinciasService) {}

  @Post()
  createProvincia(@Body() createProvinciaDto: CreateProvinciaDto) {
    return this.provinciasService.createProvincia(createProvinciaDto);
  }

  @Get()
  getProvincias() {
    return this.provinciasService.getProvincias();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provinciasService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProvinciaDto: UpdateProvinciaDto) {
    return this.provinciasService.update(id, updateProvinciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provinciasService.remove(id);
  }
}
