import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { concat, concatMap, delay, from, ignoreElements, interval, map, Observable, of, repeat, skip, take, tap } from "rxjs";

@Component({
  selector: "app-typewriter-02",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./typewriter-02.html",
  styleUrls: ["./typewriter-02.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Typewriter02 implements OnInit {
  @Input({ required: true, alias: "words" })
  words!: { icon: string; preText: string; typeText: string }[];

  @Input("disableLoop")
  disableLoop: boolean = false;

  @Input("writeSpeed")
  writeSpeed: number = 100;

  @Input("deleteDelay")
  deleteDelay: number = 3500;

  @Input("writeDelay")
  writeDelay: number = 50;

  @Input("startDelay")
  startDelay: number = 400;

  @Input("styleClass")
  styleClass?: string;

  @Input("preTextPause")
  preTextPause: number = 1000;

  @Input("textCursorColor")
  set textCursorColor(textCursorColor: string) {
    this.style.update(prev => ({ ...prev, '--text-cursor-color': textCursorColor }));
  }

  currentIcon: string | null = null;
  iconVisible = false;

  typeWriterText$?: Observable<{ icon: string; preText: string; typed: string }>;

  private wordsCount = 0;

  style = signal({});

  ngOnInit(): void {
    if (!this.words) {
      throw Error("[words] is required!");
    }
    this.typeWriterText$ = this.typeWriteEffect();

    this.typeWriterText$?.subscribe(item => {
      if (!item) return;
      if (item.icon !== this.currentIcon) {
        this.iconVisible = false;
        setTimeout(() => {
          this.currentIcon = item.icon;
          this.iconVisible = true;
        }, 200); 
      }
    });
  }

/**
 * Starts the typewriter effect for the given words.
 * It will loop through all words and start the animation.
 * If the loop is disabled, it will only type the first word.
 * @returns An observable that emits the animated words one by one.
 */
  typeWriteEffect(): Observable<any> {
    this.wordsCount = this.words.length;
    return this.startTypewriter(this.words);
  }

  /**
   * Starts the typewriter effect for the given words.
   * If the loop is disabled, it will only type the first word.
   * Otherwise, it will loop through all words and start the animation indefinitely.
   * @param words The words to type.
   * @returns An observable that emits the animated words one by one.
   */
  private startTypewriter(words: { icon: string; preText: string; typeText: string }[]): Observable<any> {
    if (this.disableLoop) {
      return concat(
        of(null).pipe(delay(this.startDelay)),
        from(words)
      ).pipe(
        skip(1),
        concatMap((word) => this.typeEffect(word!))
      );
    }

    return this.concatLetters ();
  }

  /**
   * Concatenates the typewriter effect for all words and repeats it indefinitely.
   * It will start with a delay, then type all words, skip the first word and type the rest.
   * After all words have been typed, it will repeat the process indefinitely.
   * @returns An observable that emits the animated words one by one, repeating indefinitely.
   */
  private concatLetters () {
    return concat(
      of(null).pipe(delay(this.startDelay)),
      from(this.words)
    ).pipe(
      skip(1),
      concatMap((word) => this.typeEffect(word!)),
      repeat()
    );
    
  }

/**
 * Types a word and deletes it, then types it again and waits before continuing.
 * It will also delay before starting the animation.
 * @param item The object containing the icon, preText and typeText.
 * @returns An observable that emits the animated words one by one.
 */
  private typeEffect(item: { icon: string; preText: string; typeText: string }) {
    const word = item.typeText;
    return concat(
      this.typeWord(item, false),
      of(null).pipe(delay(this.deleteDelay), ignoreElements()),
      this.typeWord(item, true),
      of(null).pipe(delay(this.writeDelay), ignoreElements()),
      of(null).pipe(delay(this.startDelay), ignoreElements())
    );
  }

/**
 * Types a word and deletes it, then types it again and waits before continuing.
 * It will also delay before starting the animation.
 * @param item The object containing the icon, preText and typeText.
 * @param backwards Whether to type the word backwards or forwards.
 * @returns An observable that emits the animated words one by one.
 */
  private typeWord(item: { icon: string; preText: string; typeText: string }, backwards?: boolean): Observable<{ icon: string; preText: string; typed: string }> {
    const { icon, preText, typeText } = item;
    if (backwards) return this.typeBackwards(preText, typeText, icon);
    return concat(
      this.typePreText(preText, icon),
      this.typePause(preText, icon),
      this.typeTypeText(typeText, preText, icon)
    );
  }


/**
 * Types a word backwards by deleting one character at a time until it is completely deleted.
 * It will also delay before starting the animation and fade out the icon after all characters have been deleted.
 * @param preText The text that will be shown before the typed text.
 * @param typeText The text that will be typed.
 * @param icon The icon that will be shown next to the typed text.
 * @returns An observable that emits the animated words one by one.
 */
  typeBackwards(preText: string, typeText: string, icon: string) {
    const full = preText + typeText;
    return interval(this.writeSpeed).pipe(
      map(x => {
        const current = full.substring(0, full.length - x);
        const pre = current.substring(0, Math.min(preText.length, current.length));
        const typed = current.substring(pre.length);
        return { icon, preText: pre, typed };
      }),
      take(full.length + 1),
      tap({
        complete: () => { this.iconVisible = false; } // Fade out after all deleted
      })
    );
  }

/**
 * Types the preText string forwards by adding one character at a time until it is completely typed.
 * It will also delay before starting the animation and fade in the icon after the first character has been typed.
 * @param preText The text that will be shown before the typed text.
 * @param icon The icon that will be shown next to the typed text.
 * @returns An observable that emits the animated words one by one.
 */
  typePreText(preText: string, icon: string): Observable<{ icon: string; preText: string; typed: string }> {
    return interval(this.writeSpeed).pipe(
      tap({ subscribe: () => { this.iconVisible = true; } }),
      map(x => ({
        icon,
        preText: preText.substring(0, x + 1),
        typed: ''
      })),
      take(preText.length + 1)
    );
  }

/**
 * Delays the emission of the next word by the specified writeDelay.
 * It will not modify the preText or typed strings.
 * @param preText The text that has been typed so far.
 * @param icon The icon that is being displayed.
 * @returns An observable that emits the next word after the specified delay.
 */
  typePause(preText: string, icon: string): Observable<{ icon: string; preText: string; typed: string }> {
    return of({
      icon,
      preText,
      typed: ''
    }).pipe(delay(this.writeDelay));
  }

/**
 * Types a word forwards by adding one character at a time until it is completely typed.
 * It will also delay before starting the animation.
 * @param typeText The text that will be typed.
 * @param preText The text that will be shown before the typed text.
 * @param icon The icon that will be shown next to the typed text.
 * @returns An observable that emits the animated words one by one.
 */
  typeTypeText(typeText: string, preText: string, icon: string): Observable<{ icon: string; preText: string; typed: string }> {
    return interval(this.writeSpeed).pipe(
      map(x => ({
        icon,
        preText,
        typed: typeText.substring(0, x + 1)
      })),
      take(typeText.length + 1)
    );
  }


}
