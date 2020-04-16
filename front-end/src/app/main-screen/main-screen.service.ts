import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const server = environment.server;

@Injectable({
  providedIn: 'root'
})
export class MainScreenService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<any>(server + '/caseworker/clients');
  }
  getCompanies(): Observable<any> {
    return this.http.get<any>(server + '/caseworker/companies');
  }
}
