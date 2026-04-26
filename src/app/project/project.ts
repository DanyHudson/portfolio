import { Component, Input, AfterViewInit, ElementRef, ViewChild, signal, OnChanges, SimpleChanges } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.html',
  styleUrls: ['./project.scss'],
})
export class Project implements AfterViewInit, OnChanges {
  @Input() projectData: any;
  @ViewChild('projectImageFrame') projectImageFrame?: ElementRef<HTMLDivElement>;

  currentLang: 'en' | 'de' = 'en';
  isImageVisible = signal(false);

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  /**
   * Starts observing the project image so it becomes visible when the element enters the viewport.
   */
  ngAfterViewInit(): void {
  if (!this.projectImageFrame) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      this.isImageVisible.set(entry.isIntersecting);
    },
    {
      threshold: 0.75,
      rootMargin: '0px 0px -20% 0px',
    }
  );

  observer.observe(this.projectImageFrame.nativeElement);
}

  /**
   * Re-triggers the image display when the project input changes while the image is already visible.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['projectData'] || changes['projectData'].firstChange) return;
    if (!this.isImageVisible()) return;

    this.isImageVisible.set(false);

    requestAnimationFrame(() => {
      this.isImageVisible.set(true);
    });
  }

}
