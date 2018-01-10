import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {AppComponent} from './app.component';
import {ServerService} from "./server.service";
import {HttpModule} from "@angular/http";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [ServerService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
