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
   * Opens the privacy policy page and scrolls the window to the top
   * after the legal page has been rendered.
   */
  openPrivacyPolicy() {
    this.legalPage = 'privacyPolicy';
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }

  /**
   * Opens the legal notice page and scrolls the window to the top
   * after the legal page has been rendered.
   */
  openLegalNotice() {
    this.legalPage = 'legalNotice';
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }

  /**
   * Closes the currently open legal page.
   */
  closeLegalPage() {
    this.legalPage = null;
  }

  /**
   * Closes any open legal page and smoothly scrolls to the requested section.
   *
   * @param anchor The ID of the target section element to scroll to.
   */
  handleSectionRequest(anchor: string): void {
    this.closeLegalPage();

    requestAnimationFrame(() => {
      const target = document.getElementById(anchor);
      const nav = document.querySelector('nav');

      if (!target) return;

      const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const scrollTop = Math.max(targetTop - navHeight, 0);

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    });
  }


}
