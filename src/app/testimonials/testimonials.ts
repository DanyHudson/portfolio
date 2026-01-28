import { Component } from '@angular/core';
import { HighlightShape } from '../highlight-shape/highlight-shape';
import { testimonials } from '../../models/page-data';
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
currentLang: 'en' | 'de' = 'en';

constructor(private langService: LangService) {
  this.langService.lang$.subscribe(lang => this.currentLang = lang);
}
}
