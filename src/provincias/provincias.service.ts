import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Provincia } from './entities/provincia.entity';

@Injectable()
export class ProvinciasService {
  constructor(
    @InjectRepository(Provincia)
    private provinciasRepository: Repository<Provincia>,
  ) {}

  createProvincia(provincia: CreateProvinciaDto) {
    const newProvincia: CreateProvinciaDto = this.provinciasRepository.create(provincia);
    return this.provinciasRepository.save(newProvincia);
  }

  getProvincias() {
    return this.provinciasRepository.find();
  }

  findOne(id: string) {
    return this.provinciasRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateProvinciaDto) {
    return this.provinciasRepository.update({ id: id }, updateData);
  }

  async remove(id: string) {
    const aEliminar = await this.provinciasRepository.findOne({ where: { id: id } });
    return this.provinciasRepository.softRemove(aEliminar);
  }
}
