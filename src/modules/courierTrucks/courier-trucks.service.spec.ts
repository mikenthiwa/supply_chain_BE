import { Test, TestingModule } from '@nestjs/testing';
import { CourierTrucksService } from './courier-trucks.service';

describe('CourierTrucksService', () => {
  let service: CourierTrucksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourierTrucksService],
    }).compile();

    service = module.get<CourierTrucksService>(CourierTrucksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
