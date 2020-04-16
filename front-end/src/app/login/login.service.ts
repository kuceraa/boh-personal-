import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

const server = environment.server;


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(server + '/api/login', { username, password }).pipe(map(user => {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }));
  }

  validate(): any {
    return localStorage.getItem('currentUser');
  }
}
