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

  interface TypewriterItem {
  icon: string;
  preText: string;
  typeText: string;
  typed?: string;
}

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: `./typewriter.html`,
  styles: [`.cursor { animation: blink 1s infinite; } @keyframes blink { 50% { opacity: 0; } }`]
})
export class Typewriter {
  words = aboutMeTypewriter;
  item: TypewriterItem = {
    icon: '',
    preText: '',
    typeText: '',
    typed: ''
  };

// words: TypewriterItem[] = aboutMeTypewriter;

  // typeEffect(item: { icon: string; preText: string; typeText: string }) {


  
  typeEffect(item: TypewriterItem) {
    const word = item.typeText;
    return concat(
      // Typewriter effect: type letters one by one
      interval(100).pipe(
        take(word.length + 1),
        map(i => ({
          ...item,
          typed: word.substring(0, i)
        }))
      ),
      // Pause after typing
      of(null).pipe(delay(1500), ignoreElements()),
      // Backward delete effect
      interval(50).pipe(
        take(word.length + 1),
        map(i => ({
          ...item,
          typed: word.substring(0, word.length - i)
        }))
      ),
      // Pause after deleting
      of(null).pipe(delay(300), ignoreElements())
    );
  }

  typedText$ = interval(1).pipe(
    concatMap(() => this.words),
    concatMap(item => this.typeEffect(item)),
    repeat()
  );
}