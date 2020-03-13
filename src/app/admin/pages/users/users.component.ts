import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../shared/interfaces/user.interface';
import {UsersService} from '../../../shared/services/users/users.service';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {UserEditFormComponent} from '../../components/user-edit-form/user-edit-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../../admin.scss']
})
export class UsersComponent implements OnInit {

  searchValue = '';
  users: IUser[];
  constructor(
    private usersService: UsersService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.initUsers();
  }

  updateSearchValue(newValue: string): void {
    this.searchValue = newValue;
  }

  async initUsers() {
    const response = await this.usersService.getAll();
    this.users = response.content;
    console.log(response);
  }

  openModalToAddUser() {
    this.modalService.open(UserEditFormComponent, {title: 'Добавить пользователя'});
    // todo подписка на закрытие и обновление списка
  }
}
