import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './components/characters/characters.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterComponent } from './components/character/character.component';
import { NgOptimizedImage } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './components/loading/loading.component';
import { RequestTimeComponent } from './components/request-time/request-time.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CharactersComponent,
    NavbarComponent,
    CharacterComponent,
    LoadingComponent,
    RequestTimeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
