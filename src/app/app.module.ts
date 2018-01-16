import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SVValidatorDirective } from 'app/Patientenverwaltung/SVValidator';


@NgModule({
  declarations: [
    AppComponent,
    SVValidatorDirective 
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
