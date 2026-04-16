import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class Nav implements AfterViewInit, OnDestroy {
  navLinks = [
    { label: 'About me', anchor: 'aboutme' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' }
  ];

  selectedLink = '';
  currentLang = 'en';

  private observer?: IntersectionObserver;

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }
 
/**
 * Lifecycle hook that is called after the component's view has been
 * initialized. It creates an IntersectionObserver that observes
 * sections of the page and updates the selected link when a section
 * becomes visible.
 */
  ngAfterViewInit(): void {
    this.observer = this.createSectionObserver();
    this.observeSections();
  }

/**
 * Creates an IntersectionObserver that observes sections of the page and
 * updates the selected link when a section becomes visible.
 *
 * @returns {IntersectionObserver} The created IntersectionObserver.
 */
  private createSectionObserver(): IntersectionObserver {
    return new IntersectionObserver(
      (entries) => this.updateSelectedLink(entries),
      {
        root: null,
        threshold: 0.5,
        rootMargin: '-80px 0px -20% 0px'
      }
    );
  }

/**
 * Updates the selected link based on the visible sections.
 *
 * @param {IntersectionObserverEntry[]} entries The entries observed by the IntersectionObserver.
 *
 * This method filters the entries to find the most visible section, and then updates the selected link based on the ID of the visible section.
 */
  private updateSelectedLink(entries: IntersectionObserverEntry[]): void {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    const activeId = visibleEntry.target.id;
    const activeLink = this.navLinks.find((link) => link.anchor === activeId);

    if (activeLink) {
      this.selectedLink = activeLink.label;
    }
  }

/**
 * Observes sections of the page that correspond to the links in the navigation.
 *
 * This method iterates over the links in the navigation and observes the corresponding section elements using the IntersectionObserver.
 * If an element is not found, it is skipped.
 */
  private observeSections(): void {
    this.navLinks.forEach((link) => {
      const section = document.getElementById(link.anchor);
      if (section) {
        this.observer?.observe(section);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  setLanguage(lang: string) {
    this.langService.setLang(lang as 'en' | 'de');
  }

  onNavClick(link: { label: string; anchor: string }) {
    this.selectedLink = link.label;
  }
}