import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
//import {MatchElement} from './model/index';
import {MatTableDataSource} from '@angular/material';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
export interface MatchElement {
  id?: number;
  team1?: string;
  team2?: string;
  datetime?: string;
  flagofteam1?: any;
  flagofteam2?: any;
};
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  options: FormGroup;
  private teams: any;
  selectedTeam: string;
  teamData: MatchElement
  constructor(fb: FormBuilder,  private http: Http) {
  }
  ngOnInit() {
    this.setTodaysTeam();
   // this.getDataOfTeams();
  } 
  setTodaysTeam() {
  this.teams = [
    'Russia',
    'Saudi Arabia',
    'D',
  ];
  }
  getDataOfTeams() {
    this.http.get("api/todaymatch.json").subscribe( response => {
      this.teamData = response.json();
    }, error => {
      console.log(error);
    }
    )
  }
}
