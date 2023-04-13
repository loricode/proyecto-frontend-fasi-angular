import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleAndSubtitleComponent } from './components/title-and-subtitle/title-and-subtitle.component';
import { FinanceModule } from './modules/finance/finance.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleAndSubtitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FinanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
