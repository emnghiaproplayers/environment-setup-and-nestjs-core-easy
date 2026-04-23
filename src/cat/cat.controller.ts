import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @Get('mew')
  mew(): string {
    try {
      return this.catService.mew();
    } catch (error) {
      throw new InternalServerErrorException('An unexpected error occurred while mewing');
    }
  }
}
