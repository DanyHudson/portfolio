import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';
import { legalPageContent } from '../../models/legal-page-data';
import { LegalPage } from '../legal-page/legal-page';
import { LangService } from '../services/lang.service';

type LegalParagraph = {
  headline: {
    en: string;
    de: string;
  };
  text: {
    en: string;
    de: string;
  };
};

type LegalPageData = {
  legalPageTitle: string;
  content: LegalParagraph[];
};

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [AboutMe, MySkills, MyProjects, Testimonials, Contact],
  templateUrl: './page-content.html',
  styleUrls: ['./page-content.scss'],
})

export class PageContent {
  @Input() legalPage: 'privacyPolicy' | 'legalNotice' | null = null;

  @Output() privacyPolicyRequested = new EventEmitter<void>();
  @Output() closeRequested = new EventEmitter<void>();

  privacyPolicyData: LegalPageData = legalPageContent[0];
  legalNoticeData: LegalPageData = legalPageContent[1];

  openPrivacyPolicy() {
    this.privacyPolicyRequested.emit();
  }

  closeLegalPage() {
    this.closeRequested.emit();
  }
}
