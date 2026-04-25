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

/**
 * Opens the privacy policy page.
 */
  openPrivacyPolicy() {
    this.legalPage = 'privacyPolicy';
  }

  /**
   * Opens the legal notice page.
   */
  openLegalNotice() {
    this.legalPage = 'legalNotice';
  }

  /**
   * Closes the currently open legal page.
   */
  closeLegalPage() {
    this.legalPage = null;
  }

  /**
   * Closes any open legal page and then scrolls smoothly to the requested section.
   */
  handleSectionRequest(anchor: string): void {
    this.closeLegalPage();

    requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}
 