export class Question {
  id: any;
  title: string;
  options: string[] = [];

  constructor(object?: any) {
    if (object) {
      for (const prop of Object.keys(object)) {
        this[prop] = object[prop];
      }
    }
  }
}
