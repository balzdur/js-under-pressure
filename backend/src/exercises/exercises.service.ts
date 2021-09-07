import { Injectable } from '@nestjs/common';
import getExerciseSet, { Exercise } from './exerciseSet';

@Injectable()
export class ExercisesService {
  findAll(): Promise<Exercise[]> {
    return getExerciseSet();
  }
}
