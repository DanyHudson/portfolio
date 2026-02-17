import { Component } from '@angular/core';
// import { Nav } from '../nav/nav';
import { SocMed } from '../soc-med/soc-med';

@Component({
  selector: 'app-landing-page-resp',
  imports: [SocMed],
  templateUrl: './landing-page-resp.html',
  styleUrls: ['./landing-page-resp.scss'],
})
export class LandingPageResp {
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
