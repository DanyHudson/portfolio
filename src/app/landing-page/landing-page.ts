import { Component } from '@angular/core';
// import { Nav } from '../nav/nav';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
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

  // scrollToStartPoint() {
  //   const el = document.getElementById('startPoint');
  //   if (el) {
  //     el.scrollIntoView({ behavior: 'smooth' });
  //     // Add bounce logic here if needed
  //   }
  // }

}
