import { Component, model, EventEmitter, Output } from '@angular/core';
import { LangService } from '../services/lang.service';

type NavLink = {
  label: string;
  anchor: string;
};

@Component({
  selector: 'app-nav-resp',
  standalone: true,
  imports: [],
  templateUrl: './nav-resp.html',
  styleUrls: ['./nav-resp.scss'],
})

export class NavResp {
  menuOpen = model(false);

  navLinks: NavLink[] = [
    { label: 'About me', anchor: 'aboutme' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' }
  ];

  @Output() sectionRequested = new EventEmitter<string>();

  currentLang: string = 'en';

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  /**
   * Toggles the menu open status.
   * If the menu is currently open, it will be closed, and vice versa.
   */
  toggleNav(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  /**
   * Closes the responsive navigation menu.
   */
  closeNav(): void {
    this.menuOpen.set(false);
  }

  /**
   * Updates the active application language.
   */
  setLanguage(lang: string) {
    this.langService.setLang(lang as 'en' | 'de');
  }

  /**
   * Closes the menu and emits a section navigation request for the selected link.
   */
  onNavClick(link: NavLink, event: Event): void {
    event.preventDefault();
    this.closeNav();
    this.sectionRequested.emit(link.anchor);
  }
}