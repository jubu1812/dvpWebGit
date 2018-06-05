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

  perioden:Sendung[];

  verordnungenPerPeriode:Verordnung[];

  currPeriode:String = 'Dummy';

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
          this.perioden = response;
          //console.log('Periode '+this.offeneSendungen);
        }
      }
    );;
  }

  onChangePeriode(){
    //console.log('Periode'+periode);
    this.PatientendatenService.getVerordnungenByPeriode(this.currPeriode).subscribe(response => {
      if(response != null){
      this.verordnungenPerPeriode = response;
      //console.log(response);
      }
    });
  }

  openModal(){
    $('#modalPeriode').modal();
  }

  saveSendung(){
    var periode = $('#periode').val().toString();
    var sendung = new Sendung(periode, this.PatientendatenService.getCurrKundennummer());

    this.PatientendatenService.createSendung(sendung).subscribe(response => {
      if(response!=null){
        this.getPeriodenByKundennummer();
      }
    });    
  }
}
