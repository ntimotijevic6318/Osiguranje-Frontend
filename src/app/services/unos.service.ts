import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Osiguranik, PomocniOsiguranik} from "../models/model";

@Injectable({
    providedIn: 'root',
})
export class UnosService {

    constructor(private httpKlijent: HttpClient) {
    }

    sacuvajUBazi(imeOsiguranika: any, prezimeOsiguranika: any, datumRodjenjaOsiguranika: any, brojPasosaOsiguranika: any, telefonOsiguranika: any, imejlOsiguranika: any, datumPutovanjaOsiguranikaOd: any, datumPutovanjaOsiguranikaDo: any, nacinPutovanjaOsiguranika: any , razlikaUDanima : any): Observable<any> {
        let putanja = environment.putanja;
        return this.httpKlijent.post(`${putanja}/api/osiguranik`, {
            imeOsiguranika: imeOsiguranika,
            prezimeOsiguranika: prezimeOsiguranika,
            datumRodjenjaOsiguranika: datumRodjenjaOsiguranika,
            brojPasosaOsiguranika: brojPasosaOsiguranika,
            telefonOsiguranika: telefonOsiguranika,
            imejlOsiguranika: imejlOsiguranika,
            datumPutovanjaOsiguranikaOd: datumPutovanjaOsiguranikaOd,
            datumPutovanjaOsiguranikaDo: datumPutovanjaOsiguranikaDo,
            nacinPutovanjaOsiguranika: nacinPutovanjaOsiguranika,
            razlikaUDanima : razlikaUDanima
        })
    }

    sacuvajPomocnogOsiguranikeUBazi(imePomocnogOsigurnaika: any, prezimePomocnogOsiguranika: any, datumRodjenjaPomocnogOsiguranika: any, id: any , brojPasosaPomocnogOsiguranika : any): Observable<any> {
        let putanja = environment.putanja;
        return this.httpKlijent.post(`${putanja}/api/osiguranik/pomocni`, {imePomocnogOsiguranika: imePomocnogOsigurnaika, prezimePomocnogOsiguranika: prezimePomocnogOsiguranika, datumRodjenjaPomocnogOsiguranika: datumRodjenjaPomocnogOsiguranika, idNosiocaOsiguranja: id , brojPasosaPomocnogOsiguranika : brojPasosaPomocnogOsiguranika})
    }

    ucitajIzBaze(): Observable<Osiguranik[]> {
        let putanja = environment.putanja;
        return this.httpKlijent.get<Osiguranik[]>(`${putanja}/api/osiguranik/osiguranici`)
    }

    ucitajPojedinacnogOsiguranikaIzBaze(poslednjiSegment: string): Observable<Osiguranik> {
        let putanja = environment.putanja;
        return this.httpKlijent.get<Osiguranik>(`${putanja}/api/osiguranik/` + poslednjiSegment)
    }

    ucitajPomocneOsiguranike(poslednjiSegment: string): Observable<PomocniOsiguranik[]> {
        let putanja = environment.putanja;
        return this.httpKlijent.get<PomocniOsiguranik[]>(`${putanja}/api/osiguranik/pomocni/` + poslednjiSegment)
    }
}
