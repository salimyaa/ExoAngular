import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  @Input() propOfB?:string;
  @Input() propSentByEventBtoAtoB?:string;
  @Output() myEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.propSentByEventBtoAtoB="Aucune";
  }


  mafonctionEmetrice() {
    this.myEmitter.emit('Valeur émise par B');

  }
}
