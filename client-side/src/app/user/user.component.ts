import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userid: string;
  @Input() user;

  constructor(
    private userservice: UserService
  ) { }

  ngOnInit() {
    console.log(this.userid);
    this.userservice.getUserDetails(this.userid).subscribe(user => {
      this.user = user;
    })
  }

}
