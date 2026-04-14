// import { Component } from '@angular/core';
// import { NavResp } from '../nav-resp/nav-resp';
// // import { SocMed } from '../soc-med/soc-med';

// @Component({
//   selector: 'app-landing-page-resp',
//   imports: [NavResp],
//   templateUrl: './landing-page-resp.html',
//   styleUrls: ['./landing-page-resp.scss'],
// })

// export class LandingPageResp {

//   menuOpen = false;

//   onMenuOpenChange(isOpen: boolean): void {
//     this.menuOpen = isOpen;
//   }
  
//   onBounceScroll(targetId: string, event: Event): void {
//     event.preventDefault();
//     const target = document.getElementById(targetId);
//     if (!target) return;

//     const targetY = target.getBoundingClientRect().top + window.scrollY;
//     const overshootY = targetY + 80;

//     window.scrollTo({ top: overshootY, behavior: 'smooth' });

//     setTimeout(() => {
//       window.scrollTo({ top: targetY, behavior: 'smooth' });
//     }, 400);
//   }

// }


// ::: new model() version :::
import { Component, signal } from '@angular/core';
import { NavResp } from '../nav-resp/nav-resp';

@Component({
  selector: 'app-landing-page-resp',
  imports: [NavResp],
  templateUrl: './landing-page-resp.html',
  styleUrls: ['./landing-page-resp.scss'],
})
export class LandingPageResp {
  menuOpen = signal(false);

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