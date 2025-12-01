import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { LandingPage } from '../landing-page/landing-page';
// import { Nav } from '../nav/nav';
import { PageContent } from "../page-content/page-content";



@Component({
  selector: 'app-page',
  imports: [LandingPage, PageContent],
  standalone: true,
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
  
})

export class Page {

}
