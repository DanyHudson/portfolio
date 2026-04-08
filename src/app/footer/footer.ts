import { Component, Output, EventEmitter } from '@angular/core';
import { SocMed } from '../soc-med/soc-med';
// import { LegalNotice } from '../legal/legal-notice/legal-notice';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocMed],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {

  // legelNotice = LegalNotice
  @Output() legalNoticeRequested = new EventEmitter<void>();  

   requestLegalNotice() {
    this.legalNoticeRequested.emit();
  }

}
