import { Component, Output, EventEmitter } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [],
  templateUrl: './legal-page.html',
  styleUrls: ['./legal-page.scss'],
})
export class LegalPage {

  currentLang: 'en' | 'de' = 'en';
  @Output() closeRequested = new EventEmitter<void>();

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

}
