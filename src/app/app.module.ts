import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MainComponent } from '../components/main/main.component';
import { Artists } from '../data/artists';
import { InvokeInPageService } from '../services/invokeInPage.service';
import { Countries } from '../data/countries';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Artists, 
    Countries,
    InvokeInPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
