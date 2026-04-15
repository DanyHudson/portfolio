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
  @Input() projectData: any; 

  currentLang: 'en' | 'de' = 'en';

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

}
