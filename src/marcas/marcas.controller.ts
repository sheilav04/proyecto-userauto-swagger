import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { MarcasService } from './marcas.service';

@ApiTags('Marcas')
@ApiBearerAuth()
@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Post()
  createMarca(@Body() newMarca: CreateMarcaDto): Promise<Marca> {
    return this.marcasService.createMarca(newMarca);
  }

  @Get()
  getMarcas(): Promise<Marca[]> {
    return this.marcasService.getMarcas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcasService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateMarcaDto, @Res() res: Response) {
    return this.marcasService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcasService.remove(id);
  }
}
