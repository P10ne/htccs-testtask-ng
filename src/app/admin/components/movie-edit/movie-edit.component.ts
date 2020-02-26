import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {MovieEditFormComponent} from '../movie-edit-form/movie-edit-form.component';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  @Input() movie: IMovie;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onEdit(event: Event) {
    const ref = this.modalService.open(MovieEditFormComponent, {data: {message: 'success open'}});
    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }

  onDelete(event: Event) {}

}
