import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Question } from '../core/question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileRegisterService {

  constructor (private _http: HttpClient) {}

  baseUrl = 'https://api.myjson.com/bins/bwiis';

  list(): Observable<Question[]> {
    const subject = new Subject<Question[]>();
    this._http.get(this.baseUrl).subscribe((json: any) => {
        subject.next(json.map((question: any) => new Question(question)));
      });
    return subject.asObservable();
  }
}
