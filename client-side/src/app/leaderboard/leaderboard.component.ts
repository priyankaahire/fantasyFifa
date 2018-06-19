import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  public leaders: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLeaderBoard().subscribe(leaders => {
      this.leaders = leaders.sort(function(a, b) {
        if (b['score'] == a['score']) {
          if (b['name'] < a['name']) {
            return 1;
          } else {
            return -1;
          }
        }
        return b['score'] - a['score'];
      }).filter(a => {
        return a['name'];
      });
    });
  }

}
