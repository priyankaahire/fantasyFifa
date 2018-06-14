import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
export interface MatchElement {
  id?: number;
  team1?: string;
  team2?: string;
  datetime?: string;
  flagofteam1?: any;
  flagofteam2?: any;
};

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  private teams: any;
  selectedTeam: string;
  teamData: MatchElement
  constructor(private http: Http) {
  }
  ngOnInit() {
    this.setTodaysTeam();
    // this.getDataOfTeams();
  }
  setTodaysTeam() {
    this.teams = [
      'Russia',
      'Saudi Arabia',
      'Drop',
    ];
  }
  getDataOfTeams() {
    this.http.get("api/todaymatch.json").subscribe(response => {
      this.teamData = response.json();
    }, error => {
      console.log(error);
    }
    )
  }

}
