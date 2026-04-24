import { Component, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-project-resp',
  standalone: true,
  imports: [],
  templateUrl: './project-resp.html',
  styleUrls: ['./project-resp.scss'],
})
export class ProjectResp implements OnChanges {
  @Input() projectData: any;

  currentLang: 'en' | 'de' = 'en';
  isImageVisible = signal(true);

  constructor(private langService: LangService) {
    this.langService.lang$.subscribe(lang => this.currentLang = lang);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['projectData'] || changes['projectData'].firstChange) return;

    this.isImageVisible.set(false);

    requestAnimationFrame(() => {
      this.isImageVisible.set(true);
    });
  }

}
