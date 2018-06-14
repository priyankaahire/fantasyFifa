import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user.subscribe(auth => {
      if (auth != null) {
        this.router.navigate(['bet'])
      }
    })
  }

  login() {
    this.authService.signInWithGoogle().then((data) => {
      this.router.navigate(['bet']);
    });
  }

}
