import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnosComponent} from "./components/unos/unos.component";
import {PregledComponent} from "./components/pregled/pregled.component";
import {PojedinacanPregledComponent} from "./components/pojedinacan-pregled/pojedinacan-pregled.component";

const routes: Routes = [
    {
        path: "unos-osiguranja",
        component: UnosComponent
    },
    {
        path: "pregled-osiguranika",
        component: PregledComponent
    },
    {
        path: "pregled-osiguranika/:id",
        component: PojedinacanPregledComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
