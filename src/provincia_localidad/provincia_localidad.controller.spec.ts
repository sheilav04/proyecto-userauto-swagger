import { Test, TestingModule } from '@nestjs/testing';
import { ProvinciaLocalidadController } from './provincia_localidad.controller';
import { ProvinciaLocalidadService } from './provincia_localidad.service';

describe('ProvinciaLocalidadController', () => {
  let controller: ProvinciaLocalidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvinciaLocalidadController],
      providers: [ProvinciaLocalidadService],
    }).compile();

    controller = module.get<ProvinciaLocalidadController>(ProvinciaLocalidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
