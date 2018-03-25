import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormsModule } from '@angular/forms';
import { PatientenverwaltungComponent } from 'app/patientenverwaltung/patientenverwaltung.component';

@Directive({
    selector: 'input[nr]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => SVValidatorDirective),
            multi: true
        }
    ]
})
export class SVValidatorDirective implements Validator {
    public validate(c: AbstractControl): any {
        //code
        let svnr: String = c.value;
        if (svnr != null) {
            svnr = svnr.split(" ").join(""); //auch wenn es in db kommen wird!!!!!

            let arr = svnr.split("").map(Number);

            if (arr.length == 10) {
                let pruefziffer = arr[3];
                arr.splice(3, 1);

                let arrmultipl = [3, 7, 9, 5, 8, 4, 2, 1, 6];
                let sum: number = 0;

                for (let i in arr) {
                    let product = arr[i] * arrmultipl[i];
                    sum += product;
                }

                if (sum % 11 == pruefziffer) {
                    return null; //kein Fehler
                }
            }            
        }
        return {
            nr: true  //Fehler bei svnr Feld
        };

    }
}