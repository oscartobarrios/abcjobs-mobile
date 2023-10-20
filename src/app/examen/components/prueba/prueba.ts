
export type Examenes = Examen[]

export class Examen {
  assignment_id: number
  focus: string
  questions: Question[]
  rol: string
  type: string

  public constructor(assignment_id: number, focus: string, questions: Question[],rol: string,type: string) {
    this.assignment_id = assignment_id;
    this.focus = focus;
    this.rol = rol;
    this.type = type;
    this.questions = questions;
  }

}

export class Question {
  answers: Answer[]
  correct_answer: string[]
  description: string

  public constructor(answers: Answer[],  correct_answer: string[],  description: string){
    this.answers = answers
    this.correct_answer = correct_answer
    this.description = description
  }
}

export class Answer {
  a?: string
  b?: string
  c?: string
  d?: string
}

export class Respuesta {
  assignment_id: number
  pregunta: number
  rta: string

  public constructor(assignment_id: number,  pregunta:number,  rta: string){
    this.assignment_id = assignment_id
    this.pregunta = pregunta
    this.rta = rta
  }
}
