import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SVValidatorDirective } from 'app/Patientenverwaltung/SVValidator';
import { PatientenverwaltungComponent } from './patientenverwaltung/patientenverwaltung.component';
import { SendungComponent } from './sendung/sendung.component';
import { VerordnungenComponent } from './verordnungen/verordnungen.component';



@NgModule({
  declarations: [
    AppComponent,
    SVValidatorDirective,
    PatientenverwaltungComponent,
    SendungComponent,
    VerordnungenComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
