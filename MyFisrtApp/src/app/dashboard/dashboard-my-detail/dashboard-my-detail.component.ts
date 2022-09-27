import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";

@Component({
  selector: 'app-dashboard-my-detail',
  templateUrl: './dashboard-my-detail.component.html',
  styleUrls: ['./dashboard-my-detail.component.scss']
})
export class DashboardMyDetailComponent implements OnInit {
  prenom?:string;
  nom?:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.prenom=params['prenom'] || 'Prenon inconnu';
      this.nom=params['nom'] || 'Nom inconnu';
    })
  }

}
