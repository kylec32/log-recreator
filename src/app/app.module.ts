import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthenticationComponent } from './authentication/authentication.component'

import { ElasticSearchService } from './services/elastic-search.service';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [ElasticSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
