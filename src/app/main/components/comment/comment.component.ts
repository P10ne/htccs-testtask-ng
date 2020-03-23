import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment, ICommentOnMovie} from '../../../shared/interfaces/comment.interface';
import {CommentsService} from '../../../shared/services/comments/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: ICommentOnMovie;
  @Output() deleteEmitter = new EventEmitter();
  _deleting = false;
  get deleting() {
    return this._deleting;
  }
  set deleting(value: boolean) {
    this._deleting = value;
  }

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
  }

  async remove() {
    this.deleting = true;
    const deleteRes = await this.commentsService.remove(this.comment.id);
    this.deleteEmitter.emit(this.comment.id);

    // todo try catch
  }

}
