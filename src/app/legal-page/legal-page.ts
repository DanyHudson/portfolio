import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LangService } from '../services/lang.service';

type LegalParagraph = {
  headline: {
    en: string;
    de: string; 
  };
  text: {
    en: string;
    de: string;
  };
};

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [],
  templateUrl: './legal-page.html',
  styleUrls: ['./legal-page.scss'],
})

export class LegalPage {
  @Input() title = '';
  @Input() content: LegalParagraph[] = [];

  legalPageType: 'privacyPolicy' | 'legalNotice' = 'privacyPolicy';
  currentLang: 'en' | 'de' = 'en';
  @Output() closeRequested = new EventEmitter<void>();

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  close() {
    this.closeRequested.emit();
  }

}
