import { Question } from './question';

export class Profile {
  questions: Question[] = [];

  constructor(object?: any) {
    if (object) {
      for (const prop of Object.keys(object)) {
        this[prop] = object[prop];
      }
    }
  }
}
