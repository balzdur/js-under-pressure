import { Injectable } from '@nestjs/common';
import getExerciseSet, { Exercise } from './exercises/exerciseSet';

@Injectable()
export class ExercisesService {
  async getExercises(): Promise<Exercise[]> {
    return getExerciseSet();
  }
}
