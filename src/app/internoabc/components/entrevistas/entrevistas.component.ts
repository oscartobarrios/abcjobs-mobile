import { Component, OnInit } from '@angular/core';
import { PreEntrevista } from '../../model/preentrevista';
import { PreentrevistaService } from '../../model/preentrevista.service';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {
  public misEntrevistas :  Array<PreEntrevista> = [];
  constructor(private resultado : PreentrevistaService) {
    this.getPruebasWs()
  }

  ngOnInit(): void {
  }

  getPruebasWs() {
    this.resultado.getEntrevistas().subscribe(datos => {
      this.misEntrevistas = datos;
      console.log(this.misEntrevistas)

    });
  }

}
