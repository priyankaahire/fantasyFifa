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
        changes.map(c => this.mapMatch(c))
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

  getMatchBets(matchid: string) {
    return this._db.object(`/matches/${matchid}/`).snapshotChanges().pipe(
      map(c => this.mapMatch(c))
    );
  }

  private mapMatch(c) {
    let bets_firstteam = [];
    let bets_secondteam = [];
    let bets_draw = [];
    if (c['payload'].val()['bets_firstteam']) {
      bets_firstteam = Object.keys(c['payload'].val()['bets_firstteam']);
    }
    if (c['payload'].val()['bets_secondteam']) {
      bets_secondteam = Object.keys(c['payload'].val()['bets_secondteam']);
    }
    if (c['payload'].val()['bets_draw']) {
      bets_draw = Object.keys(c['payload'].val()['bets_draw']);
    }
    return new Match(
      c.key,
      c['payload'].val()['firstteam'],
      c['payload'].val()['secondteam'],
      c['payload'].val()['starttime'],
      bets_firstteam,
      bets_secondteam,
      bets_draw,
      c['payload'].val()['result'],
      c['payload'].val()['points']
    );
  }
}
