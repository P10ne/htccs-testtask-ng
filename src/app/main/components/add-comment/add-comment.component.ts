import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../../../shared/services/comments/comments.service';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ICommentToAdd} from '../../../shared/interfaces/comment.interface';
import {isRequireCall} from '@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

export interface IMoviePageUrlParams {
  id: number;
}

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor(
    private commentsService: CommentsService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  _requesting = false;
  get requesting(): boolean {
    return this._requesting;
  }
  set requesting(value: boolean) {
    this._requesting = value;
  }

  formGroup = new FormGroup({
    comment: new FormControl(
      '',
      Validators.required
    )
  });

  get comment() { return this.formGroup.get('comment'); }

  isSendBtnDisabled() {
    return this.formGroup.invalid || this.formGroup.pending;
  }

  ngOnInit() {
  }

  async add() {
    const commentToAdd: ICommentToAdd = {
      value: this.comment.value,
      movieId: this.activatedRoute.snapshot.params.id,
      userId: this.authService.user.getValue().id
    };
    this.requesting = true;
    const addCommentRes = await this.commentsService.add(commentToAdd);
    // todo try catch
    this.requesting = false;
  }

}
