import { Controller, Get } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) { }

  @Get('bark-at-cat')
  barkAtCat(): string {
    return this.dogService.barkAtCat();
  }
}
