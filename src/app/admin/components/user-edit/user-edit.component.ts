import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../shared/interfaces/user.interface';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {UserEditFormComponent} from '../user-edit-form/user-edit-form.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  @Input() user: IUser;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onEdit(event: Event) {
    this.modalService.open(UserEditFormComponent, {});
  }

  onDelete(event: Event) {}

}
