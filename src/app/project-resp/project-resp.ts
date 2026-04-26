import { Component, Input, AfterViewInit, ElementRef, ViewChild, signal, OnChanges, SimpleChanges } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-project-resp',
  standalone: true,
  imports: [],
  templateUrl: './project-resp.html',
  styleUrls: ['./project-resp.scss'],
})
export class ProjectResp implements AfterViewInit, OnChanges {
  @Input() projectData: any;
  @ViewChild('projectImageFrame') projectImageFrame?: ElementRef<HTMLDivElement>;

  currentLang: 'en' | 'de' = 'en';
  isImageVisible = signal(false);

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  /**
 * Observes the image frame instead of the image itself so the pop-in animation
 * starts when the full frame reaches the viewport trigger point.
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
 * Replays the image animation when the displayed project changes while the
 * current image is already visible.
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