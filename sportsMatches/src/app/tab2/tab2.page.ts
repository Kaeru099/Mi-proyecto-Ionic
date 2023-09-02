import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  jugadoresCercanos = [
    {
      foto: '../../assets/img/niñaFutbol.png',
      nombre: 'Karina',
      edad: '20 años',
      solicitud: 'Buscando jugador',
      deporte: 'Fútbol'
    },
    {
      foto: '../../assets/img/niñaBolos.png',
      nombre: 'Emma',
      edad: '28 años',
      solicitud: 'Buscando jugador',
      deporte: 'Bolos'
    },
    {
      foto: '../../assets/img/niñoFutbol.jpg',
      nombre: 'Daniel',
      edad: '35 años',
      solicitud: 'Buscando equipo',
      deporte: 'Fútbol'
    },
  ]

  constructor() {}

}
