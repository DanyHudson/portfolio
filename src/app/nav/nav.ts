import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class Nav {
  constructor() { }
  navLinks = [
    { label: 'About me', anchor: 'aboutme' },             
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' }
  ];

  selectedLink: string = '';
  currentLang: string = 'en';

  onNavClick(link: { label: string; anchor: string }) {
    this.selectedLink = link.label;
  }

  toggleLanguage() {
  this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
}
} 
