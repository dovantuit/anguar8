import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // subject la oserver : cai lo de chay nuoc
  // BehaviorSubject de lay gia tri cuoi cung
  private _textFromHelloSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  textFromHello$: Observable<string> = this._textFromHelloSubject.asObservable();

  setTextFromHello(text: string) {
    this._textFromHelloSubject.next(text);
  }
}
