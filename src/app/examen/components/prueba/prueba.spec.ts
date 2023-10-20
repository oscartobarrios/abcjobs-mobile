import { Respuesta , Answer, Question  ,Examen } from "./prueba";

describe("Respuesta", () => {
  it("should create a new instance with the provided values", () => {
    const respuesta = new Respuesta(1, 2, "answer");
    expect(respuesta.assignment_id).toEqual(1);
    expect(respuesta.pregunta).toEqual(2);
    expect(respuesta.rta).toEqual("answer");
  });

  it("Question ", () => {
    const answers: Answer[] = [{a:"a",b:"b",c:"c",d:"d"}];
    const question = new Question(answers, ["a"], "description");

    expect(question.description).toEqual("description");
    expect(question.correct_answer).toEqual(["a"]);
  });

  it("Examen ", () => {

    const answers: Answer[] = [{a:"a",b:"b",c:"c",d:"d"}];
    const question = new Question(answers, ["a"], "description");
    const questions = [question];
    const examen = new Examen( 1, "1",questions, "1", "1", );

    expect(examen.assignment_id).toEqual(1);
    expect(examen.focus ).toEqual("1");
  });


});
