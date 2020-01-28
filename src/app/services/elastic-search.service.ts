import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElasticSearchService {

  constructor(private http: HttpClient) { }

  checkCredentials(url:string, username:string, password:string):Observable<boolean> {
    return this.http.get(url, {
      'headers': this.getBasicAuthenticationHeader(username, password),
      'observe': 'response'
    })
      .pipe(
        map(response => response.status>=200 && response.status<=299)
      );
  }

  private getBasicAuthenticationHeader(username:string, password:string) {
    return new HttpHeaders({
        "Authorization": `Basic ${btoa(`${username}:${password}`)}`
      });
  }
}
