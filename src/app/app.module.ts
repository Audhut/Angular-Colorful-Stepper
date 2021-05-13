import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgPipesModule} from 'ngx-pipes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperMainComponent } from './Stepper/stepper-main/stepper-main.component';
import { StepperStagesComponent } from './Stepper/stepper-stages/stepper-stages.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperMainComponent,
    StepperStagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
