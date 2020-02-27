import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../shared/interfaces/user.interface';
import {UsersService} from '../../../shared/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.initUsers();
  }

  async initUsers() {
    const response = await this.usersService.getAll();
    this.users = response.content;
    console.log(response);
  }

}
