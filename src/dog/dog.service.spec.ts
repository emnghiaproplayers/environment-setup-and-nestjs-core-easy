import { Test, TestingModule } from '@nestjs/testing';
import { DogService } from './dog.service';
import { CatService } from '../cat/cat.service';

describe('DogService', () => {
  let service: DogService;
  let catService: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DogService,
        {
          provide: CatService,
          useValue: {
            mew: jest.fn().mockReturnValue('mew~'),
          },
        },
      ],
    }).compile();

    service = module.get<DogService>(DogService);
    catService = module.get<CatService>(CatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "woof-heard-mew~"', () => {
    expect(service.barkAtCat()).toBe('woof-heard-mew~');
    expect(catService.mew).toHaveBeenCalled();
  });
});
