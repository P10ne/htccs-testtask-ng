import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() text = 'click';
  @Input() type = 'fill';
  @Input() wait = false;
  @Input() disabled = false;
  @Output() onClick = new EventEmitter();

  get isFill() { return this.type === 'fill'; }
  get isText() { return this.type === 'text'; }

  constructor() { }

  ngOnInit() {
  }

  click(event: Event) {
    if (!this.disabled && !this.wait) {
      this.onClick.emit(event);
    }
  }
}
