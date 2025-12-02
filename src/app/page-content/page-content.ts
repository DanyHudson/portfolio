import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { MySkills } from '../my-skills/my-skills';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [AboutMe, MySkills],
  templateUrl: './page-content.html',
  styleUrls: ['./page-content.scss'],
})
export class PageContent {

}
