import { Component } from '@angular/core';
import {Transfer} from './Transfer';
import {GetTransfers} from './Transfer.service';
import { NgModel } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './Patientenverwaltung/patientenverwaltung.component.html',
  styleUrls: ['./Patientenverwaltung/patientenverwaltung.component.css'],
  providers: [GetTransfers]
})
export class AppComponent {
  title = 'Transfers';
  transfers;
  vsnra='';
  vsnrp='';

  constructor(Transferarr: GetTransfers){
    this.transfers = Transferarr.getTransfers();
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };
}
