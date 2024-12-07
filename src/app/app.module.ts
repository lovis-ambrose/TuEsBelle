import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {TeamComponent} from "./pages/team/team.component";
import {AboutComponent} from "./pages/about/about.component";
import {HomeComponent} from "./pages/home/home.component";
import {Menubar} from "primeng/menubar";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Menubar,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
