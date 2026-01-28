import { Component } from '@angular/core';
import { aboutMe } from '../../models/page-data';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  aboutMe = aboutMe;

  currentLang: 'en' | 'de' = 'en';

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  onBounceScroll(targetId: string, event: Event): void {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const overshootY = targetY + 80;

    window.scrollTo({ top: overshootY, behavior: 'smooth' });

    setTimeout(() => {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }, 400);
  }
}
