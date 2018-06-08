import { Component, OnInit } from '@angular/core';
import { PatientendatenService } from 'app/patientendaten.service';
import { Sendung } from 'app/Sendung/sendung';
import { Verordnung } from 'app/Verordnung/Verordnung';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sendung',
  templateUrl: './sendung.component.html',
  styleUrls: ['./sendung.component.css']
})
export class SendungComponent implements OnInit {

  perioden:Sendung[];

  currSendung:Sendung;

  verordnungenPerPeriode:Verordnung[];

  offeneSendungen:Sendung[];

  currPeriode:string = 'Dummy';

  constructor(private PatientendatenService: PatientendatenService, private router: Router) { 
    this.getPeriodenByKundennummer();
    this.getOffenePerioden();
    this.getSendung();
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

  getOffenePerioden(){
    this.PatientendatenService.getOffenePerioden().subscribe(
      response => {
        if (response != null) {
          this.offeneSendungen = response;
        }
      }
    );;
  }

  onChangePeriode(){
    //console.log('Periode'+periode);
    this.getSendung();
    this.PatientendatenService.getVerordnungenByPeriode(this.currPeriode).subscribe(response => {
      if(response != null){
      this.verordnungenPerPeriode = response;
      //console.log(response);
      }
    });
  }

  getSendung(){
    this.PatientendatenService.getSendung(this.currPeriode).subscribe(response => {
      if(response != null){
        this.currSendung = response;
      }
    });
  }

  onChangePeriodeVerordnung(periode:string, vid:number){
    this.PatientendatenService.setPeriode(vid,periode).subscribe(response => {
      if(response!=null){
        //this.onChangePeriode(); //eventuell nicht erwünscht
      }
    });
  }

  onClickPeriode(periode:string){
    this.currPeriode = periode;
    this.getSendung();
    this.PatientendatenService.getVerordnungenByPeriode(periode).subscribe(response => {
      if(response != null){
      this.verordnungenPerPeriode = response;
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
        this.getOffenePerioden();    
      }
    });  
    
    $('#periode').val("");
  }

  emptyInputPeriode(){
    $('#periode').val("");
  }

  completeSendung(){
    this.PatientendatenService.completeSendung(this.currPeriode).subscribe(response => {
      if(response!=null){
        this.getPeriodenByKundennummer();     
        this.getOffenePerioden();
        this.getSendung();
      }
    });  

  }

  
}
