import { Component } from '@angular/core';
import { HighlightShape } from '../highlight-shape/highlight-shape';
import { skills } from '../../models/page-data';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [HighlightShape,],
  templateUrl: './my-skills.html',
  styleUrls: ['./my-skills.scss'],
})
export class MySkills {
  skillIcons = skills[0].skillIcons;
  learning = skills[0].learning;
}
