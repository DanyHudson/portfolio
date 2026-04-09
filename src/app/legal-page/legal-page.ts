import { Component, Output, EventEmitter } from '@angular/core';
import { LangService } from '../services/lang.service';
import { privacyPolicyText} from '../../models/page-data';
import { legalNoticeText} from '../../models/page-data';


@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [],
  templateUrl: './legal-page.html',
  styleUrls: ['./legal-page.scss'],
})
export class LegalPage {
  privacyPolicyText = privacyPolicyText;
  legalNoticeText = legalNoticeText;
  legalPageType: 'privacyPolicy' | 'legalNotice' = 'privacyPolicy';

  currentLang: 'en' | 'de' = 'en';
  @Output() closeRequested = new EventEmitter<void>();

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

}
