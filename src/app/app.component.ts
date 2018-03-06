import { Component } from '@angular/core';

import { NgModel } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
//import {PatientendatenService} from './patientendaten.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
 //constructor (private patientenDaten: PatientendatenService){

// }
 

  title = 'Transfers';
  
  vsnra='';
  vsnrp='';
  d:Date = new Date();

  

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any = { date: {year: this.d.getFullYear(), month: this.d.getMonth() + 1, day: this.d.getDate()} };
}
