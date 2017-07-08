import { Component } from '@angular/core';

@Component({
    selector: 'about-component',
    styleUrls: [
        './about.component.scss',
    ],
    templateUrl: './about.component.pug',
})
export default class AboutComponent {
    public test() {
        return 1;
    }
}
