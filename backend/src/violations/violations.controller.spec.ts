import { Test, TestingModule } from '@nestjs/testing';
import { ViolationsController } from './violations.controller';
import { ViolationsService } from './violations.service';

describe('ViolationsController', () => {
  let controller: ViolationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViolationsController],
      providers: [ViolationsService],
    }).compile();

    controller = module.get<ViolationsController>(ViolationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
