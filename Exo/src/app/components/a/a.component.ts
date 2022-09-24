import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  dataFromA?:string;
  dataOfA?:string;
  dataFromEvent?: string;
  constructor() { }

  ngOnInit(): void {
    this.dataFromA='Propriété injectée depuis A';
    this.dataOfA="Ma donnée de A initiale";
  }

  afficher(event: string) {
    this.dataOfA=event;
    this.dataFromEvent=event;
  }
}
