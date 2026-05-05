import { Component, HostListener } from '@angular/core';
import { HighlightShape } from '../highlight-shape/highlight-shape';
import { mainClaimResp, mainSubClaimResp, testimonials } from '../../models/page-data';
import { mainClaim } from '../../models/page-data';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [HighlightShape],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})

export class Testimonials {
  testimonials = testimonials;
  mainClaim = mainClaim;
  mainClaimResp = mainClaimResp;
  mainSubClaimResp = mainSubClaimResp;
  currentLang: 'en' | 'de' = 'en';

  isMobile = window.innerWidth <= 1020;

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 1020;
  }

}
