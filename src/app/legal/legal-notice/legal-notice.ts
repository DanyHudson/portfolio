import { Component, Output, EventEmitter } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { legalNoticeText } from '../../../models/page-data';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss'],
})
export class LegalNotice {
    @Output() closeRequested = new EventEmitter<void>();
    legalNoticeText = legalNoticeText;
    currentLang: 'en' | 'de' = 'en';
  
    constructor(private langService: LangService) {
      this.langService.lang$.subscribe(lang => this.currentLang = lang);
    }
  
    close() {
    this.closeRequested.emit();
  }

}
