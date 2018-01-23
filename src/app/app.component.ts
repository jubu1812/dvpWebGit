import { Component } from '@angular/core';
import {Transfer} from './Transfer';
import {GetTransfers} from './Transfer.service'; //verwerfen
import { NgModel } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetTransfers]
})
export class AppComponent {
  title = 'Transfers';
  transfers;
  vsnra='';
  vsnrp='';
  d:Date = new Date();

  constructor(Transferarr: GetTransfers){
    this.transfers = Transferarr.getTransfers();
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any = { date: {year: this.d.getFullYear(), month: this.d.getMonth() + 1, day: this.d.getDate()} };
}
