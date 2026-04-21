import { Component, Output, EventEmitter } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';
import { contactInfo } from '../../models/page-data';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactForm],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  contact = contactInfo[0];
  currentLang: 'en' | 'de' = 'en';
  @Output() privacyPolicyRequested = new EventEmitter<void>();

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
    const overshootY = targetY - 80;

    window.scrollTo({ top: overshootY, behavior: 'smooth' });

    setTimeout(() => {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }, 400);
  }

  /**
   * Emits the privacyPolicyRequested event when the user requests to view the privacy policy.
   */
  onPrivacyPolicyRequested() {
    this.privacyPolicyRequested.emit();
  }

  onScrollToTop(event: Event): void {
    const targetId = window.innerWidth <= 1020 ? 'persona-resp' : 'persona';
    this.onBounceScroll(targetId, event);
  }

}
