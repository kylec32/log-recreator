import { Component, OnInit } from '@angular/core';
import { ElasticSearchService } from '../services/elastic-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  url: string = "https://tselastic.mclabs.cloud:9243/";
  username: string;
  password: string = "2q3W@9OU1*41yvmE";
  status: string = "";

  constructor(private elasticSearchService: ElasticSearchService) { }

  ngOnInit() {
  }

  updateStatus(): void {
    if (AuthenticationComponent.isNullOrEmpty(this.url)
      || AuthenticationComponent.isNullOrEmpty(this.username)
      || AuthenticationComponent.isNullOrEmpty(this.password)) {
      return;
    }
    console.log("Starting check");
    this.status = "Checking";

    this.elasticSearchService.checkCredentials(this.url, this.username, this.password)
      .subscribe(result => this.status = result ? "OK" : "Invalid",
                  error => this.status = 'Invalid Credentials');

  }

  private static isNullOrEmpty(value: string) {
    return value == undefined || value.length < 1;
  }

}
