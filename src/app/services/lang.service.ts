import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LangService {
  // private langSubject = new BehaviorSubject<string>('en');
  // lang$ = this.langSubject.asObservable();

  // get currentLang(): string {
  //   return this.langSubject.value;
  // }

  // setLang(lang: string) {
  //   this.langSubject.next(lang);
  // }

  private langSubject = new BehaviorSubject<'en' | 'de'>('en');
lang$ = this.langSubject.asObservable();

get currentLang(): 'en' | 'de' {
  return this.langSubject.value;
}

setLang(lang: 'en' | 'de') {
  this.langSubject.next(lang);
}
}