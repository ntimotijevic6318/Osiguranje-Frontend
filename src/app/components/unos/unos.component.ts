import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {UnosService} from "../../services/unos.service";
import {Osiguranik} from "../../models/model";
import {HttpClientModule} from "@angular/common/http";

@Component({
    selector: 'app-unos',
    templateUrl: './unos.component.html',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgIf,
        HttpClientModule
    ],
    styleUrl: './unos.component.css'
})

export class UnosComponent implements OnInit {

  //Polja sa forme
  imeOsiguranika: any;
  prezimeOsiguranika: any;
  datumRodjenjaOsiguranika: any;
  brojPasosaOsiguranika: any;
  telefonOsiguranika: any;
  imejlOsiguranika: any;
  datumPutovanjaOsiguranikaOd: any;
  datumPutovanjaOsiguranikaDo: any;
  nacinPutovanjaOsiguranika: any;

  osiguranik : Osiguranik = {
    imeOsiguranika : '',
    prezimeOsiguranika : '',
    datumRodjenjaOsiguranika : '',
    brojPasosaOsigurnaika : '',
    telefonOsigurnaika : '',
    imejlOsiguranika : '',
    datumPutovanjaOsiguranikaOd : '',
    datumPutovanjaOsiguranikaDo : '',
    nacinPutovanjaOsiguranika : ''
  }

  //Forma-Validacija
  forma = new FormGroup({
   ime : new FormControl('' , [Validators.required]) ,
   prezime : new FormControl('' , [Validators.required]),
   brojpasosa : new FormControl('' , [Validators.required]),
   imejl : new FormControl('' , [Validators.required , Validators.email]),
   datumrodjenja : new FormControl('' , [Validators.required]),
   telefon : new FormControl('' , []),
   datumputovanjaod : new FormControl('' , []),
   datumputovanjado : new FormControl('',  []),
   odabir : new FormControl('' , [Validators.required])
  })

   constructor(private unosServis : UnosService) {

   }


    ngOnInit(): void {
    }


    sabmitujFormu() {
      this.unosServis.sacuvajUBazi(this.imeOsiguranika , this.prezimeOsiguranika, this.datumRodjenjaOsiguranika , this.brojPasosaOsiguranika , this.telefonOsiguranika , this.imejlOsiguranika , this.datumPutovanjaOsiguranikaOd , this.datumPutovanjaOsiguranikaDo , this.nacinPutovanjaOsiguranika)
    }


    //Getteri
  get ime(){
    return this.forma.get('ime')
  }

  get prezime(){
    return this.forma.get('prezime')
  }

  get brojpasosa(){
    return this.forma.get('brojpasosa')
  }

  get imejl(){
    return this.forma.get('imejl')
  }

  get datumrodjenja(){
    return this.forma.get('datumrodjenja')
  }


}
