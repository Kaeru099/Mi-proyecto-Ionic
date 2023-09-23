import { Component } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { InsertDatosPage } from './insert-datos/insert-datos.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  datos:any
  parques:any
  
  constructor(private conexion: ConexionService,
              private alertCtrl: AlertController,
              private toastController: ToastController,
              private modalCtrl: ModalController) {}
  
  ngOnInit() {
    this.visualizaDatos()
  }

  visualizaDatos() {
    this.conexion.consultaDatos().subscribe(
      data => {
        this.datos = data
      }
    )
    this.conexion.consultaParques().subscribe(
      data => {
        this.parques = data
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
    this.conexion.consultaParques().subscribe(
      response => {
        this.parques = response
        event.target.complete();
      }
    )
  }

  insert(){
    this.modalCtrl.create({
      component: InsertDatosPage
    })
    .then((modal) => {
      modal.present()
      return modal.onDidDismiss
    })
  }
  
  updateDatos(datos:any){
    this.modalCtrl.create({
      component: InsertDatosPage, componentProps: {datos}
    })
    .then((modal) => {
      modal.present()
      return modal.onDidDismiss
    })
  }

  removeParques(id_parque:any) {
    let remove:any = {}
    remove['id_parque'] = id_parque
    this.alertCtrl.create({
      header: 'Eliminar',
      message : '¿Está seguro que desea ELIMINAR?',
      buttons:[
        {text: 'Cancelar'},
        {text: 'Eliminar',
         handler:() => {
          this.conexion.removeParques(remove).subscribe(
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
  
  updateParques(parques:any){
    this.modalCtrl.create({
      component: InsertDatosPage, componentProps: {parques}
    })
    .then((modal) => {
      modal.present()
      return modal.onDidDismiss
    })
  }

}
