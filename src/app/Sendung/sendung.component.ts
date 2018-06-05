import { Component, OnInit } from '@angular/core';
import { PatientendatenService } from 'app/patientendaten.service';
import { Sendung } from 'app/Sendung/sendung';
import { Verordnung } from 'app/Verordnung/Verordnung';

declare var $: any;

@Component({
  selector: 'app-sendung',
  templateUrl: './sendung.component.html',
  styleUrls: ['./sendung.component.css']
})
export class SendungComponent implements OnInit {

  offeneSendungen:Sendung[];

  verordnungenPerPeriode:Verordnung[];

  constructor(private PatientendatenService: PatientendatenService) { 
    this.getPeriodenByKundennummer();
    this.PatientendatenService.getVerordnungenByPeriode('Dummy').subscribe(response => {
      if(response != null){
      this.verordnungenPerPeriode = response;
      console.log('Verordnungen per Periode'+response);
      }
    });
  }

  ngOnInit() {
  }

  getPeriodenByKundennummer(){
    this.PatientendatenService.getPeriodenByKundennummer().subscribe(
      response => {
        if (response != null) {
          this.offeneSendungen = response;
          console.log('Periode '+this.offeneSendungen);
        }
      }
    );;
  }

  onChangePeriode(periode:string){
    console.log('Periode'+periode);
    this.PatientendatenService.getVerordnungenByPeriode(periode).subscribe(response => {
      if(response != null){
      this.verordnungenPerPeriode = response;
      console.log(response);
      }
    });
  }

  openModal(){
    $('#modalPeriode').modal();
  }
}
