import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { OptionModel } from '../../src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  country: string = 'usa';
  disableSearch: boolean = false;
  simpleOptions: OptionModel[] = [
    {value: 'usa', label: 'USA'},
    {value: 'gb', label: 'Great Britain'},
    {value: 'de', label: 'Germany'},
    {value: 'ukr', label: 'Ukraine'},
    {value: 'fr', label: 'France'},
    {value: 'au', label: 'Australia'}
  ];
}
