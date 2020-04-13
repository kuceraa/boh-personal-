import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const server = environment.server;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string;
  userid: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(server + '/api/login', { username, password });
  }
}
