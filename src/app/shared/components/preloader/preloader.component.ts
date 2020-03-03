import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  _height = 'auto';
  @Input() set height(value) {
    this._height = `${value}px`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
