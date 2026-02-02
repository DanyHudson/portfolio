import {ChangeDetectionStrategy, Component, Input, OnInit, signal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {concat, concatMap, delay, from, ignoreElements, interval, map, Observable, of, repeat, skip, take} from "rxjs";

@Component({
  selector: "app-typewriter-02",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./typewriter-02.html",
  styleUrls: ["./typewriter-02.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Typewriter02 implements OnInit {
  @Input({required: true, alias: "words"})
  words!: string[];

  @Input("disableLoop")
  disableLoop: boolean = false;

  @Input("writeSpeed")
  writeSpeed: number = 100;

  @Input("deleteDelay")
  deleteDelay: number = 3500;

  @Input("writeDelay")
  writeDelay: number = 50;

  @Input("startDelay")
  startDelay: number = 0;

  @Input("styleClass")
  styleClass?: string;

  @Input("textCursorColor")
  set textCursorColor(textCursorColor: string) {
    this.style.update(prev => ({...prev, '--text-cursor-color': textCursorColor}));
  }

  typeWriterText$?: Observable<string>;

  private wordsCount = 0;

  style = signal({});

  ngOnInit(): void {
    if (!this.words) {
      throw Error("[words] is required!");
    }

    this.typeWriterText$ = this.typeWriteEffect()
      .pipe(map((text) => text));
  }

  typeWriteEffect(): Observable<string> {
    this.wordsCount = this.words.length;

    return this.startTypewriter(this.words);
  }

  private startTypewriter(words: string[]): Observable<string> {
    if (this.disableLoop) {
      return concat(
        of(null).pipe(delay(this.startDelay)),
        from(words)
      ).pipe(
        skip(1),
        concatMap((word) => this.typeEffect(word!))
      );
    }

    return concat(
      of(null).pipe(delay(this.startDelay)),
      from(words)
    ).pipe(
      skip(1),
      concatMap((word) => this.typeEffect(word!)),
      repeat()
    );
  }

  private typeEffect(word: string): Observable<string> {
    if (this.disableLoop) {
      this.wordsCount -= 1;
    }

    return concat(
      this.typeWord(word),
      of("").pipe(delay(this.deleteDelay), ignoreElements()),
      this.typeWord(word, true),
      of("").pipe(delay(this.writeDelay), ignoreElements())
    );
  }

  private typeWord(word: string, backwards?: boolean): Observable<string> {
    if (this.disableLoop && this.wordsCount <= 0 && backwards) {
      return of(word);
    }

    return interval(this.writeSpeed).pipe(
      map((x) => {
        return backwards
          ? word.substring(0, word.length - x)
          : word.substring(0, x + 1);
      }),
      take(word.length + 1)
    );
  }
}