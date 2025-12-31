import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { Testimonials } from '../testimonials/testimonials';
// import { ContactForm } from '../contact-form/contact-form';
import { Contact } from '../contact/contact';


@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [AboutMe, MySkills, MyProjects, Testimonials, Contact],
  templateUrl: './page-content.html',
  styleUrls: ['./page-content.scss'],
})
export class PageContent {

}
