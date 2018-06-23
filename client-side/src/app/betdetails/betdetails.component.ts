import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../services/match.service';
import { Match } from '../model/match';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-betdetails',
  templateUrl: './betdetails.component.html',
  styleUrls: ['./betdetails.component.css']
})
export class BetdetailsComponent implements OnInit {

  @Input() match: Match;

  constructor(
    private route: ActivatedRoute,
    private matchservice: MatchService,
    public dialogRef: MatDialogRef<BetdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
   // const matchid = this.route.snapshot.paramMap.get('matchid');
    const matchid = this.data.matchid;
    this.matchservice.getMatchBets(matchid).subscribe(match => {
      this.match = match;
    });
  }
}
