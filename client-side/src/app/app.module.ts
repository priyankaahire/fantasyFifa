import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import { TeamComponent } from './team/team.component';
@NgModule({
  declarations: [
    AppComponent, DashboardComponent, UserComponent, TeamComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule, AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
