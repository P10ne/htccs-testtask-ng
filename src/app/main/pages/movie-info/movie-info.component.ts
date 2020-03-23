import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {MoviesService} from '../../../shared/services/movies/movies.service';
import {ActivatedRoute} from '@angular/router';
import {IComment} from '../../../shared/interfaces/comment.interface';
import {CommentsService} from '../../../shared/services/comments/comments.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  movieId: number;
  movie: IMovie;
  comments: IComment[];
  constructor(
    private locationService: Location,
    private moviesService: MoviesService,
    private commentsService: CommentsService,
    private activatedRoute: ActivatedRoute
    )
  {}

  async ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.movieId = this.activatedRoute.snapshot.params.id;
    await this.initMovie();
    await this.initComments();
  }

  async initMovie() {
    const response = await this.moviesService.getById(this.movieId);
    this.movie = response.content;
  }
  async initComments() {
    const response = await this.commentsService.get(this.movieId);
    this.comments = response.content;
    console.log('init comments');
  }

  goBack() {
    this.locationService.back();
  }

  onCommentDeleted(commentId: number) {
    this.comments = this.comments.filter(comment => comment.id !== commentId);
  }

}
