import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'FIFA';
  public username: string;
  constructor (private router: Router, private authService: AuthService) {
  }
  ngOnInit() {
    this.username = sessionStorage.getItem("username");
  }
  logout() {
    this.username = '';
    this.authService.logout().then((data) => {
    this.router.navigate(['login'])
    })
  }
  goToResult() {
    this.router.navigate(['/result']);
  }
  goToBet() {
    this.router.navigate(['/bet']);
  }

}
