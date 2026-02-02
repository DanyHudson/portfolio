import { Component, Input } from '@angular/core';
import { aboutMe } from '../../models/page-data';
import { aboutMeTypewriter } from '../../models/page-data';

import { LangService } from '../services/lang.service';
// import { Typewriter } from '../typewriter/typewriter';
import { Typewriter02 } from '../typewriter-02/typewriter-02';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [Typewriter02], //Typewriter,
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  aboutMe = aboutMe;

  currentLang: 'en' | 'de' = 'en';

  // @Input({ required: true, alias: "words" })
  // words!: { icon: string; preText: string; typeText: string }[];

  typewriterWords = aboutMeTypewriter;

  // typewriterWords = aboutMeTypewriter.map(item => item.typeText);


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
