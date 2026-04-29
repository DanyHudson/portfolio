import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { LangService } from '../services/lang.service';
import { navLinks } from '../../models/nav-data';

type NavLink = {
  label: string;
  anchor: string;
};

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
/**
 * Renders the main navigation and emits section requests for in-page scrolling.
 */
export class Nav {

  @Output() sectionRequested = new EventEmitter<string>();
  
  navLinks = navLinks;
  selectedLink = '';
  currentLang: 'en' | 'de' = 'en';

  private suppressScrollClear = false;

  /**
   * Subscribes to language changes so the navigation labels can react to the current locale.
   *
   * @param langService Shared language state service.
   */
  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  @HostListener('window:scroll')

  /**
   * Clears the active link marker after manual scrolling unless a click-triggered scroll is in progress.
   */
  onWindowScroll(): void {
    if (this.suppressScrollClear) return;
    this.selectedLink = '';
  }

  /**
   * Updates the active application language.
   *
   * @param lang Language code to activate.
   */
  setLanguage(lang: string) {
    this.langService.setLang(lang as 'en' | 'de');
  }

  /**
   * Marks the clicked link as active and requests scrolling to the matching section.
   *
   * @param link Navigation item that was selected.
   * @param event Click event used to suppress the default anchor navigation.
   */
  onNavClick(link: NavLink, event: Event): void {
    event.preventDefault();
    this.selectedLink = link.label;
    this.suppressScrollClear = true;
    this.sectionRequested.emit(link.anchor);

    setTimeout(() => {
      this.suppressScrollClear = false;
    }, 700);
  }
}