import { Component } from '@angular/core';
import { sectionNames, aboutMe, aboutMeTypewriter } from '../../models/page-data';
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
 * Smoothly scrolls to the given target element and then back to the exact position after a short delay.
 * This is useful for creating a "bounce" effect when scrolling to an element.
 *
 * @param targetId The ID of the target element to scroll to.
 * @param event The event that triggered the scroll, passed for convenience.
 */
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
