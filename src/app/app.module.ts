import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiTaskComponentComponent } from './api-task-component/api-task-component.component';
import {HttpClientModule}from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ApiTaskComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
