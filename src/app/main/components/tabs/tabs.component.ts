import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
  currentTab: TabComponent;

  ngAfterContentInit() {
    this.currentTab = this.tabList.first;
  }

  onTabClick(tab: TabComponent) {
    this.currentTab = tab;
  }

  isSelected(tab: TabComponent) {
    return this.currentTab.name === tab.name;
  }

}
