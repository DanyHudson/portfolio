import { Component } from '@angular/core';
import { HighlightShape } from '../highlight-shape/highlight-shape';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [HighlightShape],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class Testimonials {

}
