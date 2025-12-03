import { Component } from '@angular/core';
import { HighlightShape } from '../highlight-shape/highlight-shape';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [HighlightShape],
  templateUrl: './my-skills.html',
  styleUrls: ['./my-skills.scss'],
})
export class MySkills {

}
