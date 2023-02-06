import { AbstractControl } from "@angular/forms";

export class NameValidation {


    static isNameAndLastname( control : AbstractControl ){

        const value = control.value;

        if( !value.includes(' ') ){
            return { isNameAndLastname : true };
        }

        const values = value.split(' ')

        if( values.length === 2 ){

            if( values[1] === '' ) {
                return { isNameAndLastname : true };
            }
        }

        return null;
    }

}