import { Component } from '@angular/core';
import { aboutMeTypewriter } from '../../models/page-data';
import { interval, map, take, concatMap, repeat, delay, of, ignoreElements, concat } from 'rxjs';
import { AsyncPipe } from '@angular/common';


// @Component({
//   selector: 'app-typewriter',
//   standalone: true,
//   imports: [],
//   templateUrl: './typewriter.html',
//   styleUrl: './typewriter.scss',
// })
// export class Typewriter {

// }
@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [AsyncPipe],
  template: `<h1>{{ typedText$ | async }}<span class="cursor">|</span></h1>`,
  styles: [`.cursor { animation: blink 1s infinite; } @keyframes blink { 50% { opacity: 0; } }`]
})
export class Typewriter {
  words = aboutMeTypewriter;

  typeEffect(word: string) {
    return concat(
      // Type
      interval(100).pipe(
        take(word.length),
        map(i => word.substring(0, i + 1))
      ),
      // Pause
      of('').pipe(delay(1500), ignoreElements()),
      // Delete
      interval(50).pipe(
        take(word.length),
        map(i => word.substring(0, word.length - i - 1))
      )
      
      
      ,
      // Pause
      of('').pipe(delay(300), ignoreElements())
    );
  }

  typedText$ = interval(1).pipe(
    concatMap(() => this.words),
    concatMap(word => this.typeEffect(word)),
    repeat()
  );
}