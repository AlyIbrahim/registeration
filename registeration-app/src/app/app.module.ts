import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { V1Component } from './v1/v1.component';

import { HttpClientModule } from '@angular/common/http';
import { RegisterationService } from './registeration.service';
import { V2Component } from './v2/v2.component';

@NgModule({
  declarations: [
    AppComponent,
    V1Component,
    V2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
