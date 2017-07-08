import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-component',
    styleUrls: [
        './../../../styles/_generic.scss',
        './../../../styles/_elements.scss',
        './../../../styles/_objects.scss',
        './../../../styles/_utilities.scss',
    ],
    templateUrl: './app.component.pug',
})
export class AppComponent {
}
