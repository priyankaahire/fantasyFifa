import { Component} from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    username: string;
  constructor (private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
  });
  }
  ngOnInit() {
    console.log('Component Init:App');
    this.username = sessionStorage.getItem("username");
}

ngOnDestroy() {
    console.log('Component Destroy:App');
}

private navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
        console.log('started: ' + JSON.stringify(event));
    }
    if (event instanceof NavigationEnd) {
        console.log('ended: ' + JSON.stringify(event));
    }
    if (event instanceof NavigationCancel) {
        console.log('cancelled:' + JSON.stringify(event));
    }
    if (event instanceof NavigationError) {
        console.log('error:' + JSON.stringify(event));
    }
}
userIsLogged() {
    if (this.username) {
        return true
    } else {
        return false;
    }
}
}
