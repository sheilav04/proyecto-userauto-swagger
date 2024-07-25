import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProvinciaLocalidad } from '../provincia_localidad/entities/provincia_localidad.entity';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';
import { Paise } from './entities/paise.entity';

@Injectable()
export class PaisesService {
  constructor(
    @InjectRepository(Paise)
    private paiseRepository: Repository<Paise>,
    @InjectRepository(ProvinciaLocalidad)
    private provLocRepository: Repository<ProvinciaLocalidad>,
  ) {}

  createPaise(paise: CreatePaiseDto) {
    const newPaise: CreatePaiseDto = this.paiseRepository.create(paise);
    return this.paiseRepository.save(newPaise);
  }

  getPaises() {
    return this.paiseRepository.find({ relations: { provinciaYlocalidad: true } });
  }

  findOne(id: string) {
    return this.paiseRepository.findOne({ where: { id: id }, withDeleted: true });
  }

  update(id: string, updateData: UpdatePaiseDto) {
    return this.paiseRepository.update({ id: id }, updateData);
  }

  async remove(id: string) {
    const aEliminar = await this.paiseRepository.findOne({ where: { id: id } });
    return this.paiseRepository.softRemove(aEliminar);
  }
}
