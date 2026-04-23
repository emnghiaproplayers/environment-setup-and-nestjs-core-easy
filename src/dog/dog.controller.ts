import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) { }

  @Get('bark-at-cat')
  barkAtCat(): string {
    try {
      return this.dogService.barkAtCat();
    } catch (error) {
      throw new InternalServerErrorException('An unexpected error occurred while barking at cat');
    }
  }
}
