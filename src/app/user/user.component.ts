import {Component, OnInit} from '@angular/core';
import {IUser} from '../user.interface';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  output: IUser[];
  info: IUser;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(next => {
      this.output = next;
    });
  }

  ngOnInit() {
  }

}
