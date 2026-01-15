import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-shape',
  imports: [],
  templateUrl: './highlight-shape.html',
  styleUrl: './highlight-shape.scss',
})
export class HighlightShape {
  @Input() claim: string = '';
  // @Input() reference: string[] | string = '';
  @Input() reference: { icon: string; label: string }[] | string = '';        

  @Input() text: string = '';
  @Input() link: string = '';
  @Input() linkLabel: string = '';
  Array = Array;
}
