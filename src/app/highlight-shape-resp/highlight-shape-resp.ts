import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-shape-resp',
  imports: [],
  templateUrl: './highlight-shape-resp.html',
  styleUrls: ['./highlight-shape-resp.scss'],
})
export class HighlightShapeResp {
  @Input() claim: string = '';
  // @Input() reference: string[] | string = '';
  @Input() reference: { icon: string; label: string }[] | string = '';        

  @Input() text: string = '';
  @Input() link: string = '';
  @Input() linkLabel: string = '';
  Array = Array;
}
