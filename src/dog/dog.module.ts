import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { CatModule } from '../cat/cat.module';

@Module({
  imports: [CatModule],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule { }
