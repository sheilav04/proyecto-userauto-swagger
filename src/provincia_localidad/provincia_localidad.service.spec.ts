import { Test, TestingModule } from '@nestjs/testing';
import { ProvinciaLocalidadService } from './provincia_localidad.service';

describe('ProvinciaLocalidadService', () => {
  let service: ProvinciaLocalidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvinciaLocalidadService],
    }).compile();

    service = module.get<ProvinciaLocalidadService>(ProvinciaLocalidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
