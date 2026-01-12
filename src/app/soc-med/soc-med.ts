import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soc-med',
  imports: [],
  templateUrl: './soc-med.html',
  styleUrl: './soc-med.scss',
})
export class SocMed {
  isEmailHover = false;
  isGithubHover = false;
  isLinkedinHover = false;

  @Input() theme: 'light' | 'dark' = 'light';
}
