import {Component, OnInit} from '@angular/core';
import {Osiguranik} from "../../models/model";
import {UnosService} from "../../services/unos.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-pregled',
    templateUrl: './pregled.component.html',
    styleUrl: './pregled.component.css'
})
export class PregledComponent implements OnInit {

    nizOsiguranika: Osiguranik[] = [];

    constructor(private unosServis: UnosService, private ruter: Router) {
    }

    ngOnInit(): void {
        this.unosServis.ucitajIzBaze().subscribe(
            (nizOsiguranika) => {
                this.nizOsiguranika = nizOsiguranika
            }
        )
    }

    konvertujUDatum(datum: any) {
        const date = new Date(datum);
        const formattedDate = date.toLocaleDateString('sr-RS', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        return formattedDate;
    }

    pregledPojedinacnogOsiguranika(osiguranik: Osiguranik) {
        this.ruter.navigate(["/pregled-osiguranika/" + osiguranik.id])
    }
}
