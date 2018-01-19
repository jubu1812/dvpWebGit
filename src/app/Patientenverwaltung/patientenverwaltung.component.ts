import { Component, OnInit } from '@angular/core';
import {Sendung} from 'app/Sendung/sendung';
import {Verordnung} from 'app/Verordnung/verordnung';

@Component({
  selector: 'app-patientenverwaltung',
  templateUrl: './patientenverwaltung.component.html',
  styleUrls: ['./patientenverwaltung.component.css']
})
export class PatientenverwaltungComponent implements OnInit {

  EditRow:number;

  constructor() { }

  ngOnInit() {
  }

  Edit(rowid:number){ //für das Bearbeiten
    this.EditRow = rowid;
  }
}
