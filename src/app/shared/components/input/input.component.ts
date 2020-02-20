import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder = '';
  @Output() changeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(event: Event) {
    this.changeEmitter.emit(event);
  }

//  todo fw 500 for placeholder and bold for text
}
