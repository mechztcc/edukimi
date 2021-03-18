import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { CardDataBaseComponent } from './components/card-data-base/card-data-base.component';
import { CardEventComponent } from './components/card-event/card-event.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataSelectionComponent } from './components/data-selection/data-selection.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NextEventsComponent } from './components/next-events/next-events.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WelcomeBoxComponent } from './components/welcome-box/welcome-box.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';



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
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
