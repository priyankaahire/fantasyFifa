import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';
import { MatchService } from '../services/match.service';

import { Match } from '../model/match';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {
  public favoriteTeam: string;
  public matches: Observable<Match[]>;
  public teamselection:any = {};
  public userid;
  public username;
  public readonly FIRSTTEAM = Match.FIRSTTEAM;
  public readonly SECONDTEAM = Match.SECONDTEAM;
  public readonly DRAW = Match.DRAW;

  constructor(private authService: AuthService, private router: Router,
    private matchService: MatchService) {}

  ngOnInit() {
    this.authService.user.subscribe(
      auth => {
        if (auth == null) {
          this.router.navigate(['login'])
        } else {
          this.userid = auth.uid;
          this.username = auth.displayName;
        }
      }
    );
    this.matches = this.matchService.getTodaysMatches();
  }

  logout() {
    this.authService.logout().then((data) => {
      this.router.navigate(['login'])
    })
  }

  placeBet(matchid) {
    console.log(this.teamselection);
    if (this.userid != null && this.teamselection != null) {
      this.matchService.betOnMatch(matchid, this.teamselection[matchid], this.userid);
    }
  }

  onSelectionChange(team, matchid) {
    this.teamselection[matchid] = team;
    this.favoriteTeam = team;
  }
  freezeBettings(time): boolean {
    const now: number = new Date().getTime();
    if (now >= time) {
      return true;
    } else {
     return false;
  }
}
}
