import { Component, model } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-nav-resp',
  standalone: true,
  imports: [],
  templateUrl: './nav-resp.html',
  styleUrls: ['./nav-resp.scss'],
})
export class NavResp {
  menuOpen = model(false);

  navLinks = [
    { label: 'About me', anchor: 'aboutme' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' }
  ];

  currentLang: string = 'en';

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  toggleNav(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeNav(): void {
    this.menuOpen.set(false);
  }

  setLanguage(lang: string) {
    this.langService.setLang(lang as 'en' | 'de');
  }

  // onNavClick(link: { label: string; anchor: string }) {
  //   this.selectedLink = link.label;
  //   this.closeNav();
  // }

  onNavClick(): void {
    this.closeNav();
  }
}