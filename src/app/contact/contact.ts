import { Component, Output, EventEmitter } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';
import { contactInfo } from '../../models/page-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactForm],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  contact = contactInfo[0];
  @Output() privacyPolicyRequested = new EventEmitter<void>();

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

  onPrivacyPolicyRequested() {
    this.privacyPolicyRequested.emit();
  }
}
