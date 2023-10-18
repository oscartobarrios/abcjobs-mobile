import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Answer, Examen, Respuesta ,Question} from '../prueba/prueba';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})

export class ExamenComponent implements OnInit {

  misrtastexto: String[] =["uno","dos"];
  ex: number=0;
  pregunta: number=0;
  totalPreguntas: number=0;
  operacionSeleccionada: string = 'suma';
  selectedOption: string = '';
  isSubmitted = false;
  isActive = true;
  isDisabled = true;
  respuestas : Respuesta[] = []

  @Output()
  public finalizarExamen: EventEmitter<Respuesta[]> = new EventEmitter();



  //todos: Examen[]
  @Input()
  public miexamen!: Examen ;

  constructor() {

  }

  ngOnInit() {

  }

  traePregunta (){
    let retorno: Question[] ;
    if ( this.miexamen !== undefined) {
      //let examenlocal = this.miexamen[this.ex] ;
      if ( this.miexamen !== undefined) {
        const { questions:preguntas } =  this.miexamen
        this.totalPreguntas = preguntas.length;
        const { description:descripcion } = preguntas[this.pregunta]
        this.traeRtas();
        return descripcion
      }
      else{
        return "No hay Mas Preguntas"
      }
    }
    else{
      return "FIN del examen"
    }

  }

  traeRtas (){
    if ( this.miexamen !== undefined) {

      let cadena : any ;
      if (  this.miexamen !== undefined) {
        const { questions:preguntas } =  this.miexamen
        const { answers:rtas } = preguntas[this.pregunta]


        cadena = rtas[0].a
        this.misrtastexto[0] = cadena

        cadena = rtas[1].b
        this.misrtastexto[1] = cadena

        cadena = rtas[2].c
        this.misrtastexto[2] = cadena

        cadena = rtas[3].d
        this.misrtastexto[3] = cadena


      }
    }
  }

  siguientePregunta(){
    this.pregunta = this.pregunta +1
    this.isSubmitted = false;
  }

  onSubmit() {
    this.isSubmitted = true;
    let rta: Respuesta = new Respuesta(this.miexamen.assignment_id,this.pregunta,this.selectedOption)
    this.respuestas.push(rta)
    console.log('Opcion seleccionada:', this.selectedOption);
    //limpiar variable
    this.selectedOption = '';
    this.pregunta = this.pregunta +1
  }

  finalizar() {
    this.isSubmitted = true;
    let rta: Respuesta = new Respuesta(this.miexamen.assignment_id,this.pregunta,this.selectedOption)
    this.respuestas.push(rta)
    console.log('Opcion seleccionada:', this.selectedOption);
    //limpiar variable
    this.selectedOption = '';
    this.pregunta = this.pregunta +1
    this.finalizarExamen.emit(this.respuestas)

  }

}
