import { Component } from '@angular/core';
import { SocMed } from '../soc-med/soc-med';

@Component({
  selector: 'app-landing-page',
  imports: [SocMed],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})

export class LandingPage {
  
/**
 * Smoothly scrolls to the given target element and then back to the exact position after a short delay.
 * This is useful for creating a "bounce" effect when scrolling to an element.
 *
 * @param targetId The ID of the target element to scroll to.
 * @param event The event that triggered the scroll, passed for convenience.
 */
  onBounceScroll(targetId: string, event: Event): void {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const overshootY = targetY + 80;

    window.scrollTo({ top: overshootY, behavior: 'smooth' });

    setTimeout(() => {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }, 400);
  }

}
