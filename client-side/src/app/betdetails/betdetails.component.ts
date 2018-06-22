import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../services/match.service';
import { Match } from '../model/match';

@Component({
  selector: 'app-betdetails',
  templateUrl: './betdetails.component.html',
  styleUrls: ['./betdetails.component.css']
})
export class BetdetailsComponent implements OnInit {

  @Input() match: Match;

  constructor(
    private route: ActivatedRoute,
    private matchservice: MatchService
  ) {}

  ngOnInit() {
    const matchid = this.route.snapshot.paramMap.get('matchid');
    this.matchservice.getMatchBets(matchid).subscribe(match => {
      this.match = match;
    });
  }

}
