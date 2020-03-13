import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTitle = '';
  @Output() searchEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSearchClick() {
    this.searchEmitter.emit(this.searchTitle);
  }

}
