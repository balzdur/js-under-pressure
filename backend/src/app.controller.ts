import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Exercise } from '../libs/exercises/src/exercises/exerciseSet';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getExercises(): Promise<Exercise[]> {
    return this.appService.getExercises();
  }
}
