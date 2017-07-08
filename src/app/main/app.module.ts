import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import 'reflect-metadata';
import 'zone.js';

import { AboutComponent, HomeComponent } from './../../pages/index';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';

import {
    PoliceDataService,
} from './../../pages/index';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ],
    providers: [
        PoliceDataService,
    ],
})
export default class AppModule { }
