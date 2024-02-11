import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UnosService {

  constructor(private httpKlijent : HttpClient ) { }

  sacuvajUBazi(imeOsiguranika: any, prezimeOsiguranika: any, datumRodjenjaOsiguranika: any, brojPasosaOsiguranika: any, telefonOsiguranika: any, imejlOsiguranika: any, datumPutovanjaOsiguranikaOd: any, datumPutovanjaOsiguranikaDo: any, nacinPutovanjaOsiguranika: any)  {
    let putanja = environment.putanja;
    this.httpKlijent.post(`${putanja}/api/osiguranik`, {
      imeOsiguranika : imeOsiguranika ,
      prezimeOsiguranika: prezimeOsiguranika,
      datumRodjenjaOsiguranika : datumRodjenjaOsiguranika,
      brojPasosaOsiguranika : brojPasosaOsiguranika,
      telefonOsiguranika : telefonOsiguranika,
      imejlOsiguranika : imejlOsiguranika,
      datumPutovanjaOsiguranikaOd : datumPutovanjaOsiguranikaOd,
      datumPutovanjaOsiguranikaDo : datumPutovanjaOsiguranikaDo,
      nacinPutovanjaOsiguranika : nacinPutovanjaOsiguranika
    })
  }
}
