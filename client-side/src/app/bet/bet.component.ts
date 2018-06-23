import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';
import { MatchService } from '../services/match.service';
import { UserService } from '../services/user.service';

import { Match } from '../model/match';
import { MatDialog } from '@angular/material';
import { BetdetailsComponent } from '../betdetails/betdetails.component';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  public matches: Observable<Match[]>;
  public teamselection:any = {};
  public userid;
  public username;
  public score;
  public readonly FIRSTTEAM = Match.FIRSTTEAM;
  public readonly SECONDTEAM = Match.SECONDTEAM;
  public readonly DRAW = Match.DRAW;

  constructor(private authService: AuthService, private router: Router,
    private matchService: MatchService, private userService: UserService,
    private dialog: MatDialog) {}

  ngOnInit() {
    this.authService.user.subscribe(
      auth => {
        if (auth == null) {
          this.router.navigate(['login'])
        } else {
          this.userid = auth.uid;
          this.username = auth.displayName;
          this.userService.getUserDetails(this.userid).subscribe(user => {
            if (user != null) {
              this.score = user['score'];
            }
          });
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

  placeBet(match) {

    if (this.userid != null && this.teamselection != null && !this.freezeBettings(match.starttime)) {
      this.matchService.betOnMatch(match.key, this.teamselection[match.key], this.userid);
    }
  }

  onSelectionChange(team, matchid) {
    this.teamselection[matchid] = team;
  }

  freezeBettings(time): boolean {
    const now: number = new Date().getTime();
    return now >= time;
  }
  openBets(matchkey): void {
    let dialogRef = this.dialog.open(BetdetailsComponent, {
      width:'400px',
      data: {matchid:matchkey},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
}
