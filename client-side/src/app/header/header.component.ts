import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'FIFA';
  constructor (private router: Router) {
  }
  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goToUser() {
    this.router.navigate(['/users']);
  }
  goToBet() {
    this.router.navigate(['/bet']);
  }

}
