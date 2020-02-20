import {Component, Input, OnInit} from '@angular/core';

export interface IMovieItem {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
}

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: IMovieItem;

  constructor() { }

  ngOnInit() {
  }

}
