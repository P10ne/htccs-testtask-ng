import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../../shared/services/movies/movies.service';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  genres = [
    {
      "title": "Комедии",
      "imgSrc": `${environment.HOST}/images/comedy.png`,
      "clMod": "comedy"
    },
    {
      "title": "Драмы",
      "imgSrc": `${environment.HOST}/images/drama.png`,
      "clMod": "drama"
    },
    {
      "title": "Фантастика",
      "imgSrc": `${environment.HOST}/images/fantacy.png`,
      "clMod": "fantasy"
    },
    {
      "title": "Ужасы",
      "imgSrc": `${environment.HOST}/images/horror.png`,
      "clMod": "horror"
    }
  ];
  channels = [
    {
      "logoSrc": "https://i.ibb.co/bNHbrJq/logo.png",
      "title": "Первый канал",
      "tvShow": [
        {
          "time": "13:00",
          "name": "Новости (с субтитрами)",
          "current": true
        },
        {
          "time": "14:00",
          "name": "Давай поженимся"
        },
        {
          "time": "15:00",
          "name": "Другие новости"
        }
      ]
    },
    {
      "logoSrc": "https://i.ibb.co/d0xcCYR/logo-1.png",
      "title": "2x2",
      "tvShow": [
        {
          "time": "13:00",
          "name": "МУЛЬТ ТВ. Сезон 4, 7 серия",
          "current": true
        },
        {
          "time": "14:00",
          "name": "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"
        },
        {
          "time": "15:00",
          "name": "БУРДАШЕВ. Сезон 1, 20 серия"
        }
      ]
    },
    {
      "logoSrc": "https://i.ibb.co/w0D6GW8/logo-2.png",
      "title": "РБК",
      "tvShow": [
        {
          "time": "13:00",
          "name": "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС",
          "current": true
        },
        {
          "time": "14:00",
          "name": "ДЕНЬ. Главные темы"
        },
        {
          "time": "15:00",
          "name": "Главные новости"
        }
      ]
    },
    {
      "logoSrc": "https://i.ibb.co/chPLJ5Z/logo-3.png",
      "title": "AMEDIA PREMIUM",
      "tvShow": [
        {
          "time": "13:00",
          "name": "Клиент всегда мёртв",
          ",current": true
        },
        {
          "time": "14:00",
          "name": "Голодные игры: Сойка-пересмешница. Часть I"
        },
        {
          "time": "15:00",
          "name": "Секс в большом городе"
        }
      ]
    }
  ];

  movies: IMovie[];
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.initMovies();
  }

  async initMovies() {
    const response = await this.moviesService.getAll();
    this.movies = response.content;
  }
}
