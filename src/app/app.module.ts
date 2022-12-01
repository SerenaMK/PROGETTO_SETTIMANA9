import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PostAttiviComponent,
        PostInattiviComponent,
        PostCardComponent,
        NavbarComponent,
        DettagliComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
