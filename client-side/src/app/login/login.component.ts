import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string
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
      this.username = data.user.displayName;
      console.log("usernamse " + data.user.displayName);
      sessionStorage.setItem("username", this.username);
      this.router.navigate(['bet']);
    });
  }

}
