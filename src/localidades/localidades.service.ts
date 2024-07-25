import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocalidadeDto } from './dto/create-localidade.dto';
import { UpdateLocalidadeDto } from './dto/update-localidade.dto';
import { Localidade } from './entities/localidade.entity';

@Injectable()
export class LocalidadesService {
  constructor(
    @InjectRepository(Localidade)
    private localidadRepository: Repository<Localidade>,
  ) {}

  createLocalidad(localidad: CreateLocalidadeDto) {
    const newLocalidad: CreateLocalidadeDto = this.localidadRepository.create(localidad);
    return this.localidadRepository.save(newLocalidad);
  }

  getLocalidad() {
    return this.localidadRepository.find();
  }

  findOne(id: string) {
    return this.localidadRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateLocalidadeDto) {
    return this.localidadRepository.update({ id: id }, updateData);
  }

  async remove(id: string) {
    const aEliminar = await this.localidadRepository.findOne({ where: { id: id } });
    return this.localidadRepository.softRemove(aEliminar);
  }
}
