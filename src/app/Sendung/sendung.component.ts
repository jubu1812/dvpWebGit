import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendung',
  templateUrl: './sendung.component.html',
  styleUrls: ['./sendung.component.css']
})
export class SendungComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*saveSendung() {
    let VSNRP: number = parseInt($('#VSNRP').val().toString()); 
    let VONAP: string = $('#VONAP').val().toString();
    let ZUNAP: string = $('#ZUNAP').val().toString();
    let STRA: string = $('#STRA').val().toString();
    let PLZL: number = parseInt($('#PLZL').val().toString());   
    let ORT: string = $('#ORT').val().toString();
    let LAND: string = $('#LAND').val().toString();
    let VSNRA: number =  parseInt($('#VSNRA').val().toString()); 
    let VONVS: string = $('#VONVS').val().toString();
    let ZUNVS: string = $('#ZUNVS').val().toString();

  let periode:();
    verordnungenArr:Array<Verordnung>;

    let sendung= new Sendung(periode, verordnungenArr);
    }*/

}
