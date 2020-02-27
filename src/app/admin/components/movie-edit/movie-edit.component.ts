import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {MovieEditFormComponent} from '../movie-edit-form/movie-edit-form.component';
import {MoviesService} from '../../../shared/services/movies/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  @Input() movie: IMovie;
  constructor(
    private modalService: ModalService,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
  }

  onEdit() {
    const ref = this.modalService.open(MovieEditFormComponent, {data: this.movie, title: 'Редактировать фильм'});
  }

  async onDelete() {
    const result = await this.moviesService.delete(this.movie.id);
    debugger
  }

}
