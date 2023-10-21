import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ConexionService } from 'src/app/services/conexion.service';


@Component({
  selector: 'app-crear-parque',
  templateUrl: './crear-parque.page.html',
  styleUrls: ['./crear-parque.page.scss'],
})
export class CrearParquePage implements OnInit {

  @Input() parques!: Partial<any>

  constructor(private modalCtrl: ModalController,
              private conexion:ConexionService) { }

  ngOnInit() {
  }

  formp = new FormGroup({
    nombre_parque: new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ]),
    direccion_parque: new FormControl('', [
      Validators.minLength(4),
      Validators.required
    ]),
    barrio_parque: new FormControl('', [
      Validators.required
    ]),
    deportes_parque: new FormControl('', [
      Validators.minLength(5),
      Validators.required
    ]),
    foto_parque: new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ])
  })

  onSubmitp = () => {
    const datp = this.formp.value
      this.conexion.insertParques(datp).subscribe(
        datap => {
          console.log('Registro guardado')
          this.closeModal()
        }, error => {
          console.log('No se pudo guardar')
        }
      )
  }

  async closeModal(){
    this.modalCtrl.dismiss(null, 'closed')
  }
}
