import { Injectable } from '@nestjs/common';
import { CatService } from '../cat/cat.service';

@Injectable()
export class DogService {
  constructor(private readonly catService: CatService) { }

  barkAtCat(): string {
    return `woof-heard-${this.catService.mew()}`;
  }
}
