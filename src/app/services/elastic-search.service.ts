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
    let body = {
      'url':url,
      'method':'GET',
      'username':username,
      'password':password
    }

    return this.http.post('/api/proxy', body, {
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

// {
// 	"_source":["message","log.offset"],
// 	"query": {
// 		"term": {
// 			"log.file.path": {
// 				"value": "G:\\git\\mastercontrol\\installedServices\\applicationTGO2\\WEB-INF\\lucee\\logs\\exception.log"
// 			}
// 		}
// 	},
// 	"sort": {
// 		"log.offset": {"order":"asc"}
// 	}
// }
