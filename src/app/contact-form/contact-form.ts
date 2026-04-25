import { Component, inject, EventEmitter, Output } from '@angular/core';
import { LangService } from '../services/lang.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { contactFormText, successMessages } from '../../models/page-data';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss'],
})
/**
 * Collects contact requests, validates consent, and submits the form payload to the mail endpoint.
 */
export class ContactForm {

  http = inject(HttpClient);

  /**
   * Holds the mutable form values bound to the template.
   */
  contactFormData = {
    userName: '',
    userEmail: '',
    message: '',
    privacyPolicyAccepted: false
  };

  mailTest = false;
  submitAttempted = false;
  currentLang: 'en' | 'de' = 'en';
  successMessage = successMessages;
  successMessageVisible = false;
  contactFormText = contactFormText;

  @Output() privacyPolicyRequested = new EventEmitter<void>();

  /**
   * Keeps the component language in sync with the global language service.
   *
   * @param langService Shared language state service.
   */
  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  post = {
    endPoint: '/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const,
    },
  };

  /**
   * Validates and submits the contact form to the backend mail endpoint.
   *
   * @param ngForm Template-driven Angular form instance.
   */
  onSubmit(ngForm: NgForm) {
    this.submitAttempted = true;

    if (ngForm.submitted && ngForm.form.valid && this.contactFormData.privacyPolicyAccepted) {
      this.http.post(this.post.endPoint, this.post.body(this.contactFormData), this.post.options)
        .subscribe({
          next: (response) => {
            this.showSuccessMessage();
            console.log('Response from server: ', response);
            ngForm.resetForm();
            this.submitAttempted = false;
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  /**
   * Shows the localized success message for a short period after a successful submission.
   */
  showSuccessMessage() {
    this.successMessageVisible = true;
    setTimeout(() => {
      this.successMessageVisible = false;
    }, 1600);
  }

  /**
   * Emits a request so the parent component can open the privacy policy view.
   */
  requestPrivacyPolicy() {
    this.privacyPolicyRequested.emit();
  }
}
