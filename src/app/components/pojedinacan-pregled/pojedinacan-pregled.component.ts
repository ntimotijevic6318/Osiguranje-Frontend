import {Component, OnInit} from '@angular/core';
import {UnosService} from "../../services/unos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Osiguranik, PomocniOsiguranik} from "../../models/model";

@Component({
    selector: 'app-pojedinacan-pregled',
    templateUrl: './pojedinacan-pregled.component.html',
    styleUrl: './pojedinacan-pregled.component.css'
})
export class PojedinacanPregledComponent implements OnInit {


    osiguranik: Osiguranik = {
        id: '',
        imeOsiguranika: '',
        prezimeOsiguranika: '',
        datumRodjenjaOsiguranika: '',
        brojPasosaOsiguranika: '',
        telefonOsiguranika: '',
        imejlOsiguranika: '',
        datumPutovanjaOsiguranikaOd: '',
        datumPutovanjaOsiguranikaDo: '',
        nacinPutovanjaOsiguranika: '',
        razlikaUDanima : '',
        datumUnosaPolise : ''
    }

    nizPomocnihOsiguranika: PomocniOsiguranik[] = [];

    constructor(private unosServis: UnosService, private ruter: Router) {
    }

    ngOnInit(): void {

        const putanja = this.ruter.url;
        const poslednjiSegment = putanja.substring(putanja.lastIndexOf("/") + 1);

        this.unosServis.ucitajPojedinacnogOsiguranikaIzBaze(poslednjiSegment).subscribe(
            (osiguranik) => {
                this.osiguranik = osiguranik;
                if (osiguranik.nacinPutovanjaOsiguranika == 'Grupno') {
                    this.unosServis.ucitajPomocneOsiguranike(poslednjiSegment).subscribe(
                        (nizPomocnihOsiguranika) => {
                            this.nizPomocnihOsiguranika = nizPomocnihOsiguranika
                        }
                    )
                }
            }
        )
    }


    konvertujUDatum(datum: any) {
        const date = new Date(datum);
        const formattedDate = date.toLocaleDateString('sr-RS', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        return formattedDate;
    }
}
