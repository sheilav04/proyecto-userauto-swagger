import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinciaLocalidadDto } from './dto/create-provincia_localidad.dto';
import { UpdateProvinciaLocalidadDto } from './dto/update-provincia_localidad.dto';
import { ProvinciaLocalidad } from './entities/provincia_localidad.entity';

@Injectable()
export class ProvinciaLocalidadService {
  constructor(
    @InjectRepository(ProvinciaLocalidad)
    private readonly provinciaLocalidadReposiroty: Repository<ProvinciaLocalidad>,
  ) {}

  create(createProvinciaLocalidadDto: CreateProvinciaLocalidadDto) {
    return this.provinciaLocalidadReposiroty.save(createProvinciaLocalidadDto);
  }

  findAll() {
    return `This action returns all provinciaLocalidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} provinciaLocalidad`;
  }

  update(id: number, updateProvinciaLocalidadDto: UpdateProvinciaLocalidadDto) {
    return `This action updates a #${id} provinciaLocalidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} provinciaLocalidad`;
  }
}
