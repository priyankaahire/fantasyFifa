import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private _db: AngularFireDatabase) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(auth => {
      if(auth != null) {
        this._db.object(`/user/${auth.uid}/photoURL`).set(auth.photoURL);
        this._db.object(`/user/${auth.uid}/name`).set(auth.displayName);
        this._db.object(`/user/${auth.uid}/score`).valueChanges().subscribe(val => {
          if(val == null) {
            this._db.object(`/user/${auth.uid}/score`).set(0);
          }
        });
      }
    });
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  logout() {
    return this._firebaseAuth.auth.signOut()
  }

}
