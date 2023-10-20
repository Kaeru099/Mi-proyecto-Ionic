import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-crear-sitio',
  templateUrl: './crear-sitio.page.html',
  styleUrls: ['./crear-sitio.page.scss'],
})
export class CrearSitioPage implements OnInit {

  @Input() datos!: Partial<any>

  constructor(private modalCtrl: ModalController,
              private conexion:ConexionService) { }

  ngOnInit() {
  }

  form = new FormGroup({
    datNombre: new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ]),
    datApellido: new FormControl('', [
      Validators.minLength(4),
      Validators.required
    ]),
    datEdad: new FormControl('', [
      Validators.required
    ]),
    datDeporte: new FormControl('', [
      Validators.minLength(5),
      Validators.required
    ]),
    datImagen: new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ])
  })

  onSubmit = () => {
    const dat = this.form.value
      this.conexion.insertDatos(dat).subscribe(
        data => {
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
