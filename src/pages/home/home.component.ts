import {
    Component,
    OnInit,
} from '@angular/core';

import {
    PoliceDataService,
} from './../index';

import {
    CrimeIncidentInterface,
} from './../../models/index';

@Component({
    selector: 'home-component',
    styleUrls: [
        './home.component.scss',
    ],
    templateUrl: './home.component.pug',
})
export default class HomeComponent implements OnInit {
    public data: CrimeIncidentInterface[];
    public categories: string[];

    public filteredIncidents: CrimeIncidentInterface[];

    public isLoading = true;

    constructor(
        private _policeDataService: PoliceDataService,
    ) {}

    public ngOnInit() {
        this._initData();
    }

    private _initData() {
        this.isLoading = true;
        this._policeDataService.getData().subscribe((resp) => {
            console.log(resp);
            this.data = resp;
            this.filteredIncidents = resp;
            this.categories = Array.from(new Set(resp.map((crimeIncident) => {
                return crimeIncident.category;
            })));
            this.isLoading = false;
        });
    }

    public showCategories(category: string) {
        this.filteredIncidents = this.data.filter((crimeIncident) => {
            return crimeIncident.category === category;
        });
    }
}
