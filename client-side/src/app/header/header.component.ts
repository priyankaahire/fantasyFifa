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
  public username;
  constructor(private router: Router, private authService: AuthService) {
   }
  ngOnInit() {
  }
  goToLink(url: string) {
    this.router.navigate([url]);
  }
}
