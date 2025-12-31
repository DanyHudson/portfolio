import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { Project } from '../project/project';
import { myProjectTabs } from '../../models/page-data'; 


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, Project],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],


})
export class Tabs {
  project = Project;
  tabs = myProjectTabs;
  activeLink = this.tabs[0];
  activeTabIndex = 0;


  constructor() {
    // this.labelClass = 'custom-label-class';
  }


  // addLink() {
  //   this.tabs.push(`Link ${this.tabs.length + 1}`);
  // }

}
