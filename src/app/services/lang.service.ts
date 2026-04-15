import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LangService {

  private langSubject = new BehaviorSubject<'en' | 'de'>('en');
  lang$ = this.langSubject.asObservable();

  /**
   * Get the current language. This is a observable that can be subscribed to, and will always return the current language.
   * @returns The current language, either 'en' or 'de'.
   */
  get currentLang(): 'en' | 'de' {
    return this.langSubject.value;
  }

  /**
   * Set the current language to the given value.
   * This will emit an event to all subscribers of the lang$ observable.
   * @param lang - The language to set, either 'en' or 'de'.
   */
  setLang(lang: 'en' | 'de') {
    this.langSubject.next(lang);
  }
}