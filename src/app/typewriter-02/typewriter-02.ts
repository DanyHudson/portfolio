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

  // ngOnInit(): void {
  //   if (!this.words) {
  //     throw Error("[words] is required!");
  //   }
  //   this.typeWriterText$ = this.typeWriteEffect()
  // }

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


  typeWriteEffect(): Observable<any> {
    this.wordsCount = this.words.length;
    return this.startTypewriter(this.words);
  }


  private startTypewriter(words: { icon: string; preText: string; typeText: string }[]): Observable<any> {
    // this.iconVisible = true;
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


  // private typeWord(item: { icon: string; preText: string; typeText: string }, backwards?: boolean): Observable<any> {
  //   const { icon, preText, typeText } = item;

  //   if (backwards) {
  //     const full = preText + typeText;
  //     return interval(this.writeSpeed).pipe(
  //       map(x => {
  //         const current = full.substring(0, full.length - x);
  //         const pre = current.substring(0, Math.min(preText.length, current.length));
  //         const typed = current.substring(pre.length);
  //         return { icon, preText: pre, typed };
  //       }),

  //       take(full.length + 1),
  //       tap({
  //         complete: () => { this.iconVisible = false; } // Fade out after all deleted
  //       })
  //     );
  //   }


  //   // Typing forward: preText first, then pause, then typeText
  //   const preText$ = interval(this.writeSpeed).pipe(
  //     tap({ subscribe: () => { this.iconVisible = true; } }), // Fade in at start
  //     map(x => ({
  //       icon,
  //       preText: preText.substring(0, x + 1),
  //       typed: ''
  //     })),
  //     take(preText.length + 1)
  //   );

  //   const pause$ = of({
  //     icon,
  //     preText,
  //     typed: ''
  //   }).pipe(delay(this.writeDelay));

  //   const typeText$ = interval(this.writeSpeed).pipe(
  //     map(x => ({
  //       icon,
  //       preText,
  //       typed: typeText.substring(0, x + 1)
  //     })),
  //     take(typeText.length + 1)
  //   );

  //   return concat(preText$, pause$, typeText$);
  // }


  private typeWord(item: { icon: string; preText: string; typeText: string }, backwards?: boolean): Observable<{ icon: string; preText: string; typed: string }> {
    const { icon, preText, typeText } = item;
    if (backwards) return this.typeBackwards(preText, typeText, icon);
    return concat(
      this.typePreText(preText, icon),
      this.typePause(preText, icon),
      this.typeTypeText(typeText, preText, icon)
    );
  }


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


  typePause(preText: string, icon: string): Observable<{ icon: string; preText: string; typed: string }> {
    return of({
      icon,
      preText,
      typed: ''
    }).pipe(delay(this.writeDelay));
  }


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
