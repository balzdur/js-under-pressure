import { Controller, Get } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { Exercise } from './exerciseSet';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  findAll(): Promise<Exercise[]> {
    return this.exercisesService.findAll();
  }
}
