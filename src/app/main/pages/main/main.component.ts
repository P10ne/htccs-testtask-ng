import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  films = [
    {
      "id": 1,
      "title": "Мульт в кино. Выпуск №103. Некогда грустить!",
      "imgSrc": "https://i.ibb.co/8XCZLVQ/picture.png",
      "description": "Описание фильма Мульт в кино. Выпуск №103. Некогда грустить!"
    },
    {
      "id": 2,
      "title": "Новый Бэтмен",
      "imgSrc": "https://i.ibb.co/ydbBj52/picture-2.png",
      "description": "Описание фильма Новый Бэтмен"
    },
    {
      "id": 3,
      "title": "Однажды... в Голливуде",
      "imgSrc": "https://i.ibb.co/HgHHH8f/picture-3.png",
      "description": "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
    },
    {
      "id": 4,
      "title": "Стриптизёрши",
      "imgSrc": "https://i.ibb.co/XFt7Xw8/picture-4.png",
      "description": "Описание фильма Стриптизёрши"
    }
  ];

  genres = [
    {
      "title": "Комедии",
      "imgSrc": "comedy-genre.png",
      "clMod": "comedy"
    },
    {
      "title": "Драмы",
      "imgSrc": "drama-genre.png",
      "clMod": "drama"
    },
    {
      "title": "Фантастика",
      "imgSrc": "fantasy-genre.png",
      "clMod": "fantasy"
    },
    {
      "title": "Ужасы",
      "imgSrc": "horror-genre.png",
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
  constructor() { }

  ngOnInit() {
  }

}
