import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],


})
export class Tabs {

  // @Input() labelClass: string | string[];
  // @Input() bodyClass: string | string[];

  // tabs = ['First', 'Second', 'Third'];
  tabs = [
    {
      label: 'DA Bubble',
      content: 'Content for Tab 1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Content for Tab 1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },

    {
      label: 'Sharky',
      content: 'Content for Tab 2'
    },

    {
      label: 'Join',
      content: 'Content for Tab 3'
    }

  ];
  activeLink = this.tabs[0];
  // @Input() bodyClass: string | string[];
  activeTabIndex = 0;


  constructor() {
    // this.labelClass = 'custom-label-class';
  }


  // addLink() {
  //   this.tabs.push(`Link ${this.tabs.length + 1}`);
  // }

}
