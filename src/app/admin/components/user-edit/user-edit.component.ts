import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../shared/interfaces/user.interface';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {UserEditFormComponent} from '../user-edit-form/user-edit-form.component';
import {UsersService} from '../../../shared/services/users/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  @Input() user: IUser;

  constructor(
    private modalService: ModalService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  onEdit() {
    this.modalService.open(UserEditFormComponent, {data: this.user, title: 'Редактировать пользователя'});
  }

  onDelete() {
    this.usersService.remove(this.user.id);
  }

}
