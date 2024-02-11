import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UnosService} from "../../services/unos.service";
import {Osiguranik} from "../../models/model";
import {Router} from "@angular/router";


@Component({
    selector: 'app-unos',
    templateUrl: './unos.component.html',
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

  brojacForme : number = 0;

  razlikaUDanima : any

  osiguranik : Osiguranik = {
    id : '' ,
    imeOsiguranika : '',
    prezimeOsiguranika : '',
    datumRodjenjaOsiguranika : '',
    brojPasosaOsiguranika : '',
    telefonOsiguranika : '',
    imejlOsiguranika : '',
    datumPutovanjaOsiguranikaOd : '',
    datumPutovanjaOsiguranikaDo : '',
    nacinPutovanjaOsiguranika : '',
      razlikaUDanima : '' ,
     datumUnosaPolise : ''
  }

  pomocniOsiguranici : string[] = []

  //Forma-Validacija
  forma = new FormGroup({
   ime : new FormControl('' , [Validators.required]) ,
   prezime : new FormControl('' , [Validators.required]),
   brojpasosa : new FormControl('' , [Validators.required]),
   imejl : new FormControl('' , [Validators.required , Validators.email]),
   datumrodjenja : new FormControl('' , [Validators.required]),
   telefon : new FormControl('' , []),
   datumputovanjaod : new FormControl('' , [Validators.required]),
   datumputovanjado : new FormControl('',  [Validators.required]),
   odabir : new FormControl('' , [Validators.required])
  })

   constructor(private unosServis : UnosService , private ruter  : Router) {

   }


    ngOnInit(): void {
    }


    sabmitujFormu() {
      this.unosServis.sacuvajUBazi(this.imeOsiguranika , this.prezimeOsiguranika, this.datumRodjenjaOsiguranika , this.brojPasosaOsiguranika , this.telefonOsiguranika , this.imejlOsiguranika , this.datumPutovanjaOsiguranikaOd , this.datumPutovanjaOsiguranikaDo , this.nacinPutovanjaOsiguranika , this.razlikaUDanima)
          .subscribe(
              (osiguranik) => {
                  this.osiguranik = osiguranik
                  if (this.nacinPutovanjaOsiguranika == 'Grupno') {

                      for (let i = 0; i < this.brojacForme; i++) {
                          const imePomocnogOsigurnaika = document.getElementById('imePomocnogOsiguranika' + i);
                          const imePomocnogOsiguranikaVrednost = (<HTMLInputElement>imePomocnogOsigurnaika).value;

                          const prezimePomocnogOsiguranika = document.getElementById('prezimePomocnogOsiguranika' + i)
                          const prezimePomocnogOsiguranikaVrednost = (<HTMLInputElement>prezimePomocnogOsiguranika).value;


                          const datumRodjenjaPomocnogOsiguranika = document.getElementById('datumRodjenjaPomocnogOsiguranika' + i)
                          const datumRodjenjaPomocnogOsiguranikaVrednost = (<HTMLInputElement>datumRodjenjaPomocnogOsiguranika).value;

                          this.unosServis.sacuvajPomocnogOsiguranikeUBazi(imePomocnogOsiguranikaVrednost , prezimePomocnogOsiguranikaVrednost , datumRodjenjaPomocnogOsiguranikaVrednost , osiguranik.id).subscribe(
                              (pomocniOsiguranik)=> {
                                 console.log(pomocniOsiguranik)
                              }
                          )
                      }
                      this.obrisiFormu();
                  }
                  this.imeOsiguranika = ''
                  this.prezimeOsiguranika = ''
                  this.brojPasosaOsiguranika = ''
                  this.telefonOsiguranika = ''
                  this.imejlOsiguranika = ''
              }
           )

      }

    private obrisiFormu() {
        for(let i=0 ; i<this.brojacForme ; i++){
            document.getElementById('pomocnaFormaOsiguranika' + i)?.remove()
        }

        this.brojacForme = 0;
    }


    dodajteFormuZaDodavanjeNovogOsiguranika() {
      const forma = document.getElementById('forma')

      const pomocnaForma = document.createElement('div')


      const ime = document.createElement('input')
      const prezime = document.createElement('input')
      const datumRodjenja = document.createElement('input')

      datumRodjenja.setAttribute("type" , "date");
      ime.setAttribute("type" , "text");
      prezime.setAttribute("type" , "text")

      ime.setAttribute("placeholder", "Unesite ime dodatnog osiguranika");
      prezime.setAttribute("placeholder" , "Unesite prezime dodatnog osigurnaika")

      pomocnaForma.setAttribute("id" , "pomocnaFormaOsiguranika" + this.brojacForme);
      ime.setAttribute("id" , "imePomocnogOsiguranika" + this.brojacForme);
      prezime.setAttribute("id" , "prezimePomocnogOsiguranika" + this.brojacForme);
      datumRodjenja.setAttribute("id" , "datumRodjenjaPomocnogOsiguranika" + this.brojacForme);


      pomocnaForma.appendChild(ime)
      pomocnaForma.appendChild(prezime)
      pomocnaForma.appendChild(datumRodjenja);

      forma?.appendChild(pomocnaForma)

      this.brojacForme++;
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

  get datumputovanjaod(){
    return this.forma.get('datumputovanjaod')
  }

  get datumputovanjado(){
    return this.forma.get('datumputovanjado')
  }


    detektujPromenu() {
        if(this.nacinPutovanjaOsiguranika == 'Individualno' && this.brojacForme!= 0){
            for(let i = 0 ; i < this.brojacForme ; i++){
                document.getElementById('pomocnaFormaOsiguranika' + i)?.remove();
            }

            this.brojacForme =0;
        }
    }



    detektujPromenuPrvogDatuma() {
        if(this.datumPutovanjaOsiguranikaDo != null){
            let datum1 = new Date(this.datumPutovanjaOsiguranikaDo);
            let datum2 = new Date(this.datumPutovanjaOsiguranikaOd);

// Calculating the time difference
// of two dates
            let razlikaUVremenu =
                datum1.getTime() - datum2.getTime();

// Calculating the no. of days between
// two dates
            this.razlikaUDanima =
                Math.round
                (razlikaUVremenu / (1000 * 3600 * 24));
        }
    }

    detektujPromenuDrugogDatuma() {
        if(this.datumPutovanjaOsiguranikaOd != null){

            let datum1 = new Date(this.datumPutovanjaOsiguranikaDo);
            let datum2 = new Date(this.datumPutovanjaOsiguranikaOd);

// Calculating the time difference
// of two dates
            let razlikaUVremenu =
                datum1.getTime() - datum2.getTime();

// Calculating the no. of days between
// two dates
            this.razlikaUDanima =
                Math.round
                (razlikaUVremenu / (1000 * 3600 * 24));
        }
    }
}
