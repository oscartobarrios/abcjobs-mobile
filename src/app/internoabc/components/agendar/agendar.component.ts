import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Company, Oferta, PreEntrevista ,Candidate,Entrevista} from '../../model/preentrevista';
import { PreentrevistaService } from '../../model/preentrevista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {
  public listaEmpresas :  Array<Company> = [];
  public listaPreentrevistas :  Array<PreEntrevista> = [];
  public listaOfertas :  Array<Oferta> = [];
  public listaCandidatos :  Array<Candidate> = [];
  public cod_empresa: number = 0;
  public entrevista : Entrevista = new Entrevista("",[], "", "", "", "");
  selectedEmpresa: Company = new Company(0, '', '', '', '', '', '', '', '');



  public ionicForm = new FormGroup({
    empresa: new FormControl<Company[]>(this.listaEmpresas),
    oferta: new FormControl<Oferta[]>(this.listaOfertas),
    candidato: new FormControl<Candidate[]>(this.listaCandidatos),
    link: new FormControl<string>(''),
    descripcion: new FormControl<string>(''),
    fecha: new FormControl<string>(''),

  });



  seleccionaEmpresa() {

    console.log("hola mundo")

    console.log(this.ionicForm.get('empresa')?.value);
    const empresa = this.ionicForm.get('empresa')?.value?.toString();
    if (empresa) {
      this.entrevista.id_company = empresa;
      this.getOfertasEmpresa(empresa);
    }

  }

  seleccionaOferta() {

    console.log("hola seleccionaOferta")

    console.log(this.ionicForm.get('oferta')?.value);
    const oferta = this.ionicForm.get('oferta')?.value?.toString();
    if (oferta) {
      this.entrevista.id_offer = oferta;
      this.getCandidatosOferta(oferta);
    }

  }

  seleccionaCandidato() {

    console.log("hola seleccionaCandidato")

    console.log(this.ionicForm.get('candidato')?.value);
    const miCandidato = this.ionicForm.get('candidato')?.value?.toString();
    if (miCandidato) {
      this.entrevista.candidates.push(miCandidato);
      console.log("candidato seleccionado:" + miCandidato);
    }

  }



  constructor(public formBuilder: FormBuilder,private resultado : PreentrevistaService, private router : Router) {
    this.getEmpresas()


  }
  ngOnInit() {

  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm = () => {
    if (this.ionicForm.valid) {
      this.entrevista.description = this.ionicForm.get('descripcion')?.value?.toString() ?? '';
      this.entrevista.date = this.ionicForm.get('fecha')?.value?.toString() ?? '';
      this.entrevista.link = this.ionicForm.get('link')?.value?.toString() ?? '';

      console.log(this.entrevista);


      this.resultado.crearEntrevista(this.entrevista).subscribe(datos => {
        console.log( "GUardado"+datos);
        this.ionicForm.reset();
        this.router.navigate(['internoabc/entrevistas']);

      });


      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  getEmpresas() {
    this.resultado.getEmpresas().subscribe(datos => {
      this.listaEmpresas = datos;

    });
  }

  getOfertasEmpresa(empresa : string) {
    this.listaOfertas = []
    this.resultado.getOfertasEmpresa(empresa).subscribe(datos => {
      this.listaOfertas = datos;


    });
  }

  getCandidatosOferta(oferta : string) {
    this.listaCandidatos = []
    this.resultado.getPreEntrevistas(oferta).subscribe(datos => {
      this.listaPreentrevistas = datos;
      datos.forEach(element => {
        this.listaCandidatos.push(element.candidate)
      })

      console.log("listaCandidatos: ")
      console.log(this.listaCandidatos)
    });
  }


  cambiaEmpresa(datos: any) {
    console.log(datos)
  }

}
