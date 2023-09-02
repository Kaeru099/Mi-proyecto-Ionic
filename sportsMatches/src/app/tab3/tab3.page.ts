import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  torneos = []
  public alertButtons = ['Cancelar','OK'];
  public alertInputs = [
    {
      label: 'Cuatro',
      type: 'radio',
      value: 'cuatro',
    },
    {
      label: 'Ocho',
      type: 'radio',
      value: 'ocho',
    },
    {
      label: 'Dieciseis',
      type: 'radio',
      value: 'dieciseis',
    },
  ];

  constructor() {}

}
