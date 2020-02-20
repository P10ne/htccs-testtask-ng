import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() text = 'click';
  @Input() type = 'fill';
  @Output() clickEmitter = new EventEmitter();

  get isFill() { return this.type === 'fill'; }
  get isText() { return this.type === 'text'; }

  constructor() { }

  ngOnInit() {
  }

  click(event: Event) {
    this.clickEmitter.emit(event);
  }

}
