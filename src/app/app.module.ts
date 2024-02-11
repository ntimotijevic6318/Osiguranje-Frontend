import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./components/app/app.component";
import {UnosComponent} from "./components/unos/unos.component";
import {PregledComponent} from './components/pregled/pregled.component';
import {PojedinacanPregledComponent} from './components/pojedinacan-pregled/pojedinacan-pregled.component';


@NgModule({
    declarations: [
        AppComponent,
        UnosComponent,
        PregledComponent,
        PojedinacanPregledComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
