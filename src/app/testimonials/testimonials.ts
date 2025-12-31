import { Component } from '@angular/core';
import { HighlightShape } from '../highlight-shape/highlight-shape';
import { testimonials } from '../../models/page-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [HighlightShape],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class Testimonials {
testimonials = testimonials
;
}
