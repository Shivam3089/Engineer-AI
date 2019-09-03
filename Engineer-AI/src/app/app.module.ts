import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SearchByTitlePipe } from './title-search.pipe';


@NgModule({
declarations: [
  AppComponent,
  SearchByTitlePipe
],
imports: [
  BrowserModule,
  ModalModule.forRoot(),
  HttpClientModule,
  FormsModule
],
providers: [AppService],
bootstrap: [AppComponent]
})
export class AppModule { }
