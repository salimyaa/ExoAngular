import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-my-identity',
  templateUrl: './my-identity.component.html',
  styleUrls: ['./my-identity.component.scss']
})
export class MyIdentityComponent implements OnInit {
  myId?:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{this.myId=params['id'] || "pas d'id"});
  }

}
