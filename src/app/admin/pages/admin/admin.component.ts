import {Component, OnInit} from '@angular/core';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {IUser, Role} from '../../../shared/interfaces/user.interface';

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

  users: IUser[] = [
    {
      id: 1,
      login: 'admin',
      role: Role.admin
    },
    {
      id: 2,
      login: 'user',
      role: Role.user
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
