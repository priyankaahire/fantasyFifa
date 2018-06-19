import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'FIFA';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLink(url: string) {
    this.router.navigate([url]);
  }

}
