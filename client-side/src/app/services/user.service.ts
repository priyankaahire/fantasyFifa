import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {

  constructor(private _db: AngularFireDatabase) { }

  getUserDetails(userid: string) {
      return this._db.object(`user/${userid}`).valueChanges();
  }

  getLeaderBoard() {
    return this._db.list(`user`, ref => ref.orderByChild('score')).valueChanges();
  }
}
