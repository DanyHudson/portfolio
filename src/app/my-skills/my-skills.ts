import { Component } from '@angular/core';
import { HighlightShape } from '../highlight-shape/highlight-shape';
import { skills } from '../../models/page-data';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [HighlightShape,],
  templateUrl: './my-skills.html',
  styleUrls: ['./my-skills.scss'],
})
export class MySkills {
  skillIcons = skills[0].skillIcons;
  learning = skills[0].learning;

  // currentLang: string = 'en';

  currentLang: 'en' | 'de' = 'en';

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }
}