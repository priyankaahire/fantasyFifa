import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Match } from '../model/match';

import {
  AngularFireDatabase
} from 'angularfire2/database';

@Injectable()
export class MatchService {

  constructor(private _db: AngularFireDatabase) { }

  getTodaysMatches() {
    return this._db.list('/matches', ref => ref.orderByChild('starttime')).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => new Match(
            c.payload.key,
            c.payload.val()['firstteam'],
            c.payload.val()['secondteam'],
            c.payload.val()['starttime'],
            c.payload.val()['bets_firstteam'],
            c.payload.val()['bets_secondteam'],
            c.payload.val()['bets_draw']
          )
        )
      )
    );
  }

  betOnMatch(matchid: string, team: string, userid: string) {
    this.resetBet(matchid, userid);
    let betsType: string;
    switch(team) {
      case Match.FIRSTTEAM: {
        betsType = 'bets_firstteam';
        break;
      }
      case Match.SECONDTEAM: {
        betsType = 'bets_secondteam';
        break;
      }
      default: {
        betsType = 'bets_draw';
        break;
      }
    }
    console.log(betsType);
    const resourceURI = `/matches/${matchid}/${betsType}/${userid}`;
    this._db.object(resourceURI).set(true);
  }

  private resetBet(matchid: string, userid: string) {
    const bets = [
      `/matches/${matchid}/bets_firstteam/${userid}`,
      `/matches/${matchid}/bets_secondteam/${userid}`,
      `/matches/${matchid}/bets_draw/${userid}`
    ];
    for(let bet of bets) {
      this._db.object(bet).remove();
    }
  }
}
