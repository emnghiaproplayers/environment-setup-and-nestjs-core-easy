import { Test, TestingModule } from '@nestjs/testing';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { InternalServerErrorException } from '@nestjs/common';

describe('DogController', () => {
  let controller: DogController;
  let service: DogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogController],
      providers: [
        {
          provide: DogService,
          useValue: {
            barkAtCat: jest.fn().mockReturnValue('woof-heard-mew~'),
          },
        },
      ],
    }).compile();

    controller = module.get<DogController>(DogController);
    service = module.get<DogService>(DogService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "woof-heard-mew~" on GET /dogs/bark-at-cat', () => {
    expect(controller.barkAtCat()).toBe('woof-heard-mew~');
    expect(service.barkAtCat).toHaveBeenCalled();
  });

  it('should throw InternalServerErrorException if service fails', () => {
    jest.spyOn(service, 'barkAtCat').mockImplementationOnce(() => {
      throw new Error('Test error');
    });
    expect(() => controller.barkAtCat()).toThrow(InternalServerErrorException);
  });
});
