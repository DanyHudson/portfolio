import { Component } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';
import { contactInfo } from '../../models/page-data';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contact = contactInfo[0];

}
