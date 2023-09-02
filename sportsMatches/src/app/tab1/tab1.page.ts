import { Component } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  datos:any
  
  constructor(private conexion: ConexionService,
              private alertCtrl: AlertController,
              private toastController: ToastController) {}
  
  ngOnInit() {
    this.visualizaDatos()
  }

  visualizaDatos() {
    this.conexion.consultaDatos().subscribe(
      data => {
        this.datos = data
      }
    )
  }

  /* parques = [
    {
      img: '',
      nombre: 'Parque El Vergel',
      direccion: '',
      barrio: '',
      actividades: ''
    },
    {
      img: '',
      nombre: 'Parque La Revolución',
      direccion: '',
      barrio: '',
      actividades: ''
    },
    {
      img: '',
      nombre: 'Parque La Merced',
      direccion: '',
      barrio: '',
      actividades: ''
    }
  ]

  sitiosAlquiler = [
    {
      img: '',
      nombre: 'Centro Recreativo Comfandi',
      horario: '',
      direccion: '',
      barrio: '',
      actividades: ''
    },
    {
      img: '',
      nombre: 'Comfenalco',
      horario: '',
      direccion: '',
      barrio: '',
      actividades: ''
    },
    {
      img: '',
      nombre: 'Plaza Sport',
      horario: '',
      direccion: '',
      barrio: '',
      actividades: ''
    },
  ] */

  mostrarParques = true;
  mostrarSitios = true;

  limpiarFiltro() {
    this.mostrarParques = true;
    this.mostrarSitios = true;
  }

  removeDatos(datId:any) {
    let remove:any = {}
    remove['datId'] = datId
    this.alertCtrl.create({
      header: 'Eliminar',
      message : '¿Está seguro que desea ELIMINAR?',
      buttons:[
        {text: 'Cancelar'},
        {text: 'Eliminar',
         handler:() => {
          this.conexion.removeDatos(remove).subscribe(
            data => {
              this.presentToast()
            }
          )
         },
      },
      ],
    })
    .then((myAlert) => myAlert.present())
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro eliminado',
      duration: 2000
    });
    toast.present();
  }

  doRefresh(event: any){
    this.conexion.consultaDatos().subscribe(
      response => {
        this.datos = response
        event.target.complete();
      }
    )
  }

  insert(){
    
  }


}
