import { Component, Output, EventEmitter } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';
import { contactInfo } from '../../models/page-data';
import { sectionNames } from '../../models/section-names-data';
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
  sectionNames = sectionNames;
  currentLang: 'en' | 'de' = 'en';
  @Output() privacyPolicyRequested = new EventEmitter<void>();

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  /**
   * Smoothly scrolls to the given target element.
   *
   * @param targetId The ID of the target element to scroll to.
   * @param event The event that triggered the scroll, passed for convenience.
   */
  onBounceScroll(targetId: string, event: Event): void {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  /**
   * Emits the privacyPolicyRequested event when the user requests to view the privacy policy.
   */
  onPrivacyPolicyRequested() {
    this.privacyPolicyRequested.emit();
  }

  /**
   * Scrolls back to the contact section header, choosing the mobile or desktop target element by viewport width.
   */
  onScrollToTop(event: Event): void {
    const targetId = window.innerWidth <= 1020 ? 'persona-resp' : 'persona';
    this.onBounceScroll(targetId, event);
  }

}
