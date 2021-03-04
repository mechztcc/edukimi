import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { MainComponent } from './pages/main/main.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeBoxComponent } from './components/welcome-box/welcome-box.component';
import { HeaderComponent } from './components/header/header.component';
import { CardDataBaseComponent } from './components/card-data-base/card-data-base.component';
import { DataSelectionComponent } from './components/data-selection/data-selection.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { NextEventsComponent } from './components/next-events/next-events.component';
import { CardEventComponent } from './components/card-event/card-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    MainComponent,
    SideNavComponent,
    WelcomeBoxComponent,
    HeaderComponent,
    CardDataBaseComponent,
    DataSelectionComponent,
    DashboardComponent,
    CardDashboardComponent,
    NextEventsComponent,
    CardEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
