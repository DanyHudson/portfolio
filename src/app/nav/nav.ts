import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { LangService } from '../services/lang.service';

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
export class Nav {
  navLinks: NavLink[] = [
    { label: 'About me', anchor: 'aboutme' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' }
  ];

  @Output() sectionRequested = new EventEmitter<string>();

  selectedLink = '';
  currentLang = 'en';

  private suppressScrollClear = false;
  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.suppressScrollClear) return;
    this.selectedLink = '';
  }

  setLanguage(lang: string) {
    this.langService.setLang(lang as 'en' | 'de');
  }

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