import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() labelText = '';
  @Output() changeEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  change(event: Event) {
    this.changeEmitter.emit(event);
  }

}
