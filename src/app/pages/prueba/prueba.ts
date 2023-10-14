import { Pregunta } from "./pregunta";
export class Prueba {
  assignment_id: string;
  focus: string;
  rol: string;
  type: string;
  //questions: Array<Pregunta>;

  public constructor(assignment_id: string, focus: string, rol: string,type: string) {
    this.assignment_id = assignment_id;
    this.focus = focus;
    this.rol = rol;
    this.type = type;
    //this.questions = questions;
  }
}
