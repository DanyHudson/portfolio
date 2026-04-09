import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { Testimonials } from '../testimonials/testimonials';
// import { ContactForm } from '../contact-form/contact-form';
import { Contact } from '../contact/contact';
import { privacyPolicyText }from '../../models/page-data';
import { legalNoticeText }from '../../models/page-data';
import { LegalPage } from '../legal-page/legal-page';



@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [AboutMe, MySkills, MyProjects, Testimonials, Contact, LegalPage],
  templateUrl: './page-content.html',
  styleUrls: ['./page-content.scss'],
})
export class PageContent {
  legalPage: 'privacyPolicyText' | 'legalNotice' | null = null;

  openPrivacyPolicy() {
    this.legalPage = 'privacyPolicy';
  }

  openLegalNotice() {
    this.legalPage = 'legalNotice';
  }

  closeLegalPage() {
    this.legalPage = null;
  }

}
