import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TabInterface, TabEmitterInterface } from './interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
  @Input() tabs: TabInterface[];
  @Output() onTabChanged: EventEmitter<TabEmitterInterface> = new EventEmitter();
  private titles: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.getTitles();
  }

  tabClicked(tab, index): void {
    if (!tab.isActive) {
      tab.isActive = true;
      this.tabs.map((item, i) => i !== index ? item.isActive = false : null);
      this.onTabChanged.emit({ tab, index });
    }
  }

  private getTitles(): void {
    this.titles = this.tabs.map(item => item.title);
  }
}
