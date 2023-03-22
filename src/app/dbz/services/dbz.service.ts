import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personsajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personsajes];
    }

    constructor() { }

    agregarPersonaje(personaje: Personaje) {
        this._personsajes.push(personaje);
    }
}