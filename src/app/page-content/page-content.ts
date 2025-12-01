import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [AboutMe],
  templateUrl: './page-content.html',
  styleUrls: ['./page-content.scss'],
})
export class PageContent {

}
