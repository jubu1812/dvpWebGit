import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SVValidatorDirective } from 'app/Patientenverwaltung/SVValidator';
import { PatientenverwaltungComponent } from './patientenverwaltung/patientenverwaltung.component';
import { SendungComponent } from './sendung/sendung.component';
import { VerordnungenComponent } from 'app/verordnung/verordnungen.component';
import { Routes, RouterModule } from '@angular/router';
import {PatientendatenService} from 'app/patientendaten.service';
import { CommonModule } from '@angular/common';
import { VPNRValidatorDirective } from 'app/Verordnung/VPNRValidator';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: "/patient",
    pathMatch: 'full'
  },
  { path: 'patient', component: PatientenverwaltungComponent },
  { path: 'sendung', component: SendungComponent },
  { path: 'verordnung', component: VerordnungenComponent }
     
  ];


@NgModule({
  declarations: [
    AppComponent,
    SVValidatorDirective,
    VPNRValidatorDirective,
    PatientenverwaltungComponent,
    SendungComponent,
    VerordnungenComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    CommonModule,
    RouterModule.forRoot(ROUTES)   
  ],
  providers: [PatientendatenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
