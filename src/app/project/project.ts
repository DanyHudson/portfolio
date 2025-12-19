import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { myProjectTabs } from '../../models/page-data';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.html',
  styleUrls: ['./project.scss'],
})
export class Project {
  @Input() projectData: any; // @Input() signals that this component here, 'project', expects to receive a value from its parent, 'tabs' component
  // tabs = myProjectTabs; // this refers to 'tabs' the array imported from page-data.ts

}
