import { Component } from '@angular/core';
import { Tabs } from '../tabs/tabs';
import { sectionNames } from '../../models/page-data';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [Tabs],
  templateUrl: './my-projects.html',
  styleUrls: ['./my-projects.scss'],
})

export class MyProjects {

  sectionNames = sectionNames;
  currentLang: 'en' | 'de' = 'en';

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

}
