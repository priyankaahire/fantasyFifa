import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIFA';
  constructor (private router: Router) {

  }
  onDashboarClick() {
  }
  goToUser() {
    this.router.navigate(['/user']);
  }
  goToTeam() {
    this.router.navigate(['/team']);
  }
}
