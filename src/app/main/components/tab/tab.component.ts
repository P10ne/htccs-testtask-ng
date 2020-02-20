import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() name: string;
  @Input() templateRef: TemplateRef<any>;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

//  todo убрать cursor pointer с активного таба
}
