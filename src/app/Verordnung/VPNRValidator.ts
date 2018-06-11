import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormsModule } from '@angular/forms';
import { PatientenverwaltungComponent } from 'app/patientenverwaltung/patientenverwaltung.component';

@Directive({
    selector: 'input[vpnr]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => VPNRValidatorDirective),
            multi: true
        }
    ]
})
export class VPNRValidatorDirective implements Validator {
    public validate(c: AbstractControl): any {
        //code
        let vpnrt: String = c.value;
        if (vpnrt!= null) {
            
            vpnrt = vpnrt.split(" ").join("");

            let arr = vpnrt.split("").map(Number);
            
            if (arr.length == 6) {

                let multiArr: number[] = [3,7,5,1,6];

                let sum = 0;
                for(let i = 0; i<arr.length-1; i++){
                    sum = sum + arr[i]*multiArr[i];
                }

                var method2 : number = sum%11 + 5;
                if(method2/10 >= 1){
                    method2 = parseInt(""+method2/10);
                }

                if(sum%11==arr[5] || (sum%11==method2)){ //pruefziffer
                    return null;
                } 
            }           
        }

        return {           
            vpnr: true  //Fehler bei svnr Feld
        };

    }
}