import { Component } from '@angular/core';
import { aboutMe, aboutMeTypewriter } from '../../models/page-data';
import { sectionNames } from '../../models/section-names-data';
import { LangService } from '../services/lang.service';
import { Typewriter02 } from '../typewriter-02/typewriter-02';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [Typewriter02],
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss'],
})
export class AboutMe {
  aboutMe = aboutMe;
  sectionNames = sectionNames;
  currentLang: 'en' | 'de' = 'en';
  typewriterWords = aboutMeTypewriter;

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

/**
 * Smoothly scrolls to the given target element.
 *
 * @param targetId The ID of the target element to scroll to.
 */
  onBounceScroll(targetId: string): void {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }
}
