import { Component, Input } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-project-resp',
  standalone: true,
  imports: [],
  templateUrl: './project-resp.html',
  styleUrls: ['./project-resp.scss'],
})
export class ProjectResp {
  @Input() projectData: any; // @Input() signals that this component here, 'project', expects to receive a value from its parent, 'tabs' component
  // tabs = myProjectTabs; // this refers to 'tabs' the array imported from page-data.ts

  currentLang: 'en' | 'de' = 'en';

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

}
