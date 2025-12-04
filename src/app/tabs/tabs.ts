import { Component } from '@angular/core';
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
  // tabs = ['First', 'Second', 'Third'];
  tabs = [
  {
     label: 'Tab 1',
     content: 'Content for Tab 1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Content for Tab 1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
  { label: 'Tab 2', content: 'Content for Tab 2' },
  { label: 'Tab 3', content: 'Content for Tab 3' }
];
  activeLink = this.tabs[0];
  

  // addLink() {
  //   this.tabs.push(`Link ${this.tabs.length + 1}`);
  // }

}
