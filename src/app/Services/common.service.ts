import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sidePanel = new BehaviorSubject(false);
  constructor(private _http: HttpClient) { }
  fetchMenuStructre(): Observable<any>{
    return this._http.get(`./assets/json/menu.json`);
  }
}
