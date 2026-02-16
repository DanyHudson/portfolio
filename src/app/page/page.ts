import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { LandingPage } from '../landing-page/landing-page';
import { Nav } from '../nav/nav';
import { NavResp } from '../nav-resp/nav-resp';
import { PageContent } from "../page-content/page-content";
import { Footer } from '../footer/footer';




@Component({
  selector: 'app-page',
  imports: [LandingPage, Nav, NavResp, PageContent, Footer],
  standalone: true,
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
  
})

export class Page {

}
