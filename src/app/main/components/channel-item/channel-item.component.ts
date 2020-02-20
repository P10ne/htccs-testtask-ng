import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})
export class ChannelItemComponent implements OnInit {

  @Input() channel;
  constructor() { }

  ngOnInit() {
  }

}
