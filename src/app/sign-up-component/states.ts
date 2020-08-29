import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class StatesService {


    getStatesOf(country: string) {
        let result: Array<String>;
        if (country.toLowerCase() === "mexico") {
            result = this.mexico();
        }

    }


    getStatesOf2(fn) {
        return fn;
    }

    mexico(): Array<String> {
        return ["Jalisco", "Michoacan", "Zacatecas", "Coahuila", "Durango", "Colima"]
    }
}