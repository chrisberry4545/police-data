import { Routes } from '@angular/router';

import { AboutComponent, HomeComponent } from './../../pages/index';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
];
