import { Component } from '@angular/core';
import {Transfer} from './Transfer';
import {GetTransfers} from './Transfer.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './Patientenverwaltung/patientenverwaltung.html',
  styleUrls: ['./Patientenverwaltung/patientenverwaltung.css'],
  providers: [GetTransfers]
})
export class AppComponent {
  title = 'Transfers';
  transfers;

  constructor(Transferarr: GetTransfers){
    this.transfers = Transferarr.getTransfers();
  }
}
