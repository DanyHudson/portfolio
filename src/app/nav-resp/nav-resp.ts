import { Component } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-nav-resp',
  standalone: true,
  imports: [],
  templateUrl: './nav-resp.html',
  styleUrls: ['./nav-resp.scss'],
})

export class NavResp {

  navLinks = [
    { label: 'About me', anchor: 'aboutme' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' }
  ];

  selectedLink: string = '';
  currentLang: string = 'en';

  navOpen = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  setLanguage(lang: string) {
    this.langService.setLang(lang as 'en' | 'de');
  }

  onNavClick(link: { label: string; anchor: string }) {
    this.selectedLink = link.label;
  }

}