import { Component, Output, EventEmitter } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { privacyPolicyText } from '../../../models/page-data';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss'],
})
export class PrivacyPolicy {
  @Output() closeRequested = new EventEmitter<void>();
  privPolText = privacyPolicyText;
  currentLang: 'en' | 'de' = 'en';

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  close() {
  this.closeRequested.emit();
}

}
