import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  mew(): string {
    return 'mew~';
  }
}
