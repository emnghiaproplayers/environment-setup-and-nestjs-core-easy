import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { InternalServerErrorException } from '@nestjs/common';

describe('CatController', () => {
  let controller: CatController;
  let service: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [
        {
          provide: CatService,
          useValue: {
            mew: jest.fn().mockReturnValue('mew~'),
          },
        },
      ],
    }).compile();

    controller = module.get<CatController>(CatController);
    service = module.get<CatService>(CatService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "mew~" on GET /cats/mew', () => {
    expect(controller.mew()).toBe('mew~');
    expect(service.mew).toHaveBeenCalled();
  });

  it('should throw InternalServerErrorException if service fails', () => {
    jest.spyOn(service, 'mew').mockImplementationOnce(() => {
      throw new Error('Test error');
    });
    expect(() => controller.mew()).toThrow(InternalServerErrorException);
  });
});
