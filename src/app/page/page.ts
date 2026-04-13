import { Component } from '@angular/core';
import { LandingPage } from '../landing-page/landing-page';
import { Nav } from '../nav/nav';
import { PageContent } from "../page-content/page-content";
import { Footer } from '../footer/footer';
import { LandingPageResp } from "../landing-page-resp/landing-page-resp";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [LandingPage, Nav, PageContent, Footer, LandingPageResp],
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
  
})

export class Page {
  legalPage: 'privacyPolicy' | 'legalNotice' | null = null;

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
 