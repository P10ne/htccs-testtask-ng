import { Component, OnInit } from '@angular/core';
import {IMovie} from '../../../shared/interfaces/movie.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  movies: IMovie[] = [
    {
      id: 1,
      description: 'Описание',
      genre: 'жанр',
      country: 'Страна',
      title: 'название',
      imgSrc: '#',
      year: 2000
    },
    {
      id: 2,
      description: 'Описание',
      genre: 'жанр',
      country: 'Страна',
      title: 'название',
      imgSrc: '#',
      year: 2000
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
