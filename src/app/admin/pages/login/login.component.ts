import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {LoginFormComponent, LoginResult} from '../../../shared/components/login-form/login-form.component';
import {Router} from '@angular/router';
import {ModalRef} from '../../../shared/classes/modal-ref';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  modalAfterClosedSub: Subscription;
  constructor(private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
    const modalRef = this.modalService.open(LoginFormComponent, {});
    this.modalAfterClosedSub = modalRef.afterClosed.subscribe(closedResult => {
      if (closedResult.status === LoginResult.SUCCESS) {
        this.router.navigate(['admin']).then(() => {});
      }
    });
  }

  ngOnDestroy(): void {
    this.modalAfterClosedSub.unsubscribe();
  }

}
