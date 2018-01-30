import { Component, OnInit } from '@angular/core';
import {Sendung} from 'app/Sendung/sendung';
import {Verordnung} from 'app/Verordnung/verordnung';

import {Transfer} from 'app/Transfer';
import {GetTransfers} from 'app/Transfer.service'; //verwerfen


@Component({
  selector: 'app-patientenverwaltung',
  templateUrl: './patientenverwaltung.component.html',
  styleUrls: ['./patientenverwaltung.component.css'],
  providers: [GetTransfers]
})
export class PatientenverwaltungComponent implements OnInit {

  VOIDRow:number;
  transfers;

  constructor(Transferarr: GetTransfers){
    this.transfers = Transferarr.getTransfers();
  }

  ngOnInit() {
  }

  Edit(VOID:number){ //für das Bearbeiten
    this.VOIDRow = VOID; //Verordnungsnummer
  }

  loescheVerordnung(VOID:number){

  }

  
}
