import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programar',
  templateUrl: './programar.component.html',
  styleUrls: ['./programar.component.css']
})
export class ProgramarComponent implements OnInit {
  backButtonText = 'Go Back';
  constructor() { }

  ngOnInit(): void {
  }

}
