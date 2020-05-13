import { Injectable } from '@angular/core';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';

export class Locale {
  public name: string;
  public code: string;
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  private _selectedLanguage: BehaviorSubject<string> = new BehaviorSubject("en-us");
  public selectedLanguage$ = this._selectedLanguage.asObservable();

  public getAllLanguages(): Observable<Locale[]> {
    let languages: Array<Locale> = [];
    languages.push(new Locale("English", "en-us"));
    languages.push(new Locale("French", "fr-ca"));
    languages.push(new Locale("German", "de"));
    return of(languages);
  }
  
  public setSelectedLanguage(lang) {
    this._selectedLanguage.next(lang);
  }
}
