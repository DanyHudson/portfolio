import { Component, EventEmitter, Output, signal } from '@angular/core';
import { NavResp } from '../nav-resp/nav-resp';

@Component({
  selector: 'app-landing-page-resp',
  imports: [NavResp],
  templateUrl: './landing-page-resp.html',
  styleUrls: ['./landing-page-resp.scss'],
})
export class LandingPageResp {
  menuOpen = signal(false);

  @Output() sectionRequested = new EventEmitter<string>();

  onArrowClick(event: Event): void {
    event.preventDefault();
    this.sectionRequested.emit('aboutme');
  }

  /**
   * Forwards a section navigation request from the responsive navigation component.
   */
  onSectionRequested(anchor: string): void {
    this.sectionRequested.emit(anchor);
  }
}