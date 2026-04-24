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
  @ViewChild('projectImage') projectImage?: ElementRef<HTMLImageElement>;

  currentLang: 'en' | 'de' = 'en';
  isImageVisible = signal(false);

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }


  ngAfterViewInit(): void {
    if (!this.projectImage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isImageVisible.set(entry.isIntersecting);
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px 120px 0px',
      }
    );

    observer.observe(this.projectImage.nativeElement);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['projectData'] || changes['projectData'].firstChange) return;
    if (!this.isImageVisible()) return;

    this.isImageVisible.set(false);

    requestAnimationFrame(() => {
      this.isImageVisible.set(true);
    });
  }

}
