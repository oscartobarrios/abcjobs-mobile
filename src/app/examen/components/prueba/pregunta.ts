export class Pregunta {
  answers : string[];
  description : string;
  correct_answer : string;

  public constructor( answers : string[],description : string, correct_answer : string) {
    this.answers = answers;
    this.description = description;
    this.correct_answer = correct_answer;
  }

}
