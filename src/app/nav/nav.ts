import { Component } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class Nav {

  navLinks = [
    { label: 'About me', anchor: 'aboutme' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' }
  ];

  selectedLink: string = '';
  currentLang: string = 'en';

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