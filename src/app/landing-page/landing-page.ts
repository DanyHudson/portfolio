import { Component, Output, EventEmitter } from '@angular/core';
import { SocMed } from '../soc-med/soc-med';

@Component({
  selector: 'app-landing-page',
  imports: [SocMed],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})

export class LandingPage {
  @Output() sectionRequested = new EventEmitter<string>();

  onArrowClick(event: Event): void {
    event.preventDefault();
    this.sectionRequested.emit('aboutme');
  }


}
