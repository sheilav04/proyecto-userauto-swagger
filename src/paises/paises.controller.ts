import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';
import { Paise } from './entities/paise.entity';
import { PaisesService } from './paises.service';

@ApiTags('Paises')
@ApiBearerAuth()
@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Post()
  createPaise(@Body() newPais: CreatePaiseDto): Promise<Paise> {
    return this.paisesService.createPaise(newPais);
  }

  @Get()
  getPaises(): Promise<Paise[]> {
    return this.paisesService.getPaises();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdatePaiseDto, @Res() res: Response) {
    return this.paisesService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.paisesService.remove(id);
  }
}
