import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-shape',
  standalone: true,
  imports: [],
  templateUrl: './highlight-shape.html',
  styleUrls: ['./highlight-shape.scss'],
})
export class HighlightShape {
  @Input() claim: string = '';
  @Input() reference: { icon: string; label: string }[] | string = '';
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() linkLabel: string = '';

  @Input() contentAlign: 'center' | 'left' = 'center';
  @Input() animateBackground = true;

  Array = Array;
}
