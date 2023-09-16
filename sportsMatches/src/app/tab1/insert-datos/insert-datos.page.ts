import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-insert-datos',
  templateUrl: './insert-datos.page.html',
  styleUrls: ['./insert-datos.page.scss'],
})
export class InsertDatosPage implements OnInit {

  @Input() datos!: Partial<any>
  isUpdate:boolean = false

  constructor(private modalCtrl: ModalController,
              private conexion:ConexionService) { }

  ngOnInit() {
    this.updateDatos()
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
    if(this.isUpdate){
      const dat = {
        datId: parseInt(this.datos['datId']),
        datNombre: this.form.value.datNombre,
        datApellido: this.form.value.datApellido,
        datEdad: this.form.value.datEdad,
        datDeporte: this.form.value.datDeporte,
        datImagen: this.form.value.datImagen
      }
      this.conexion.updateDatos(dat).subscribe(
        data => {
          console.log('Registro actualizado')
          this.closeModal()
        }, error => {
          console.log('No se pudo actualizar')
        }
        )
    }else{
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
    
  }

  async closeModal(){
    this.modalCtrl.dismiss(null, 'closed')
  }

  updateDatos(){
    if(this.datos){
      this.isUpdate = true
      this.form.patchValue(
        {
          datNombre: this.datos['datNombre'],
          datApellido: this.datos['datApellido'],
          datEdad: this.datos['datEdad'],
          datDeporte: this.datos['datDeporte'],
          datImagen: this.datos['datImagen']
        }
      )
    }
  }

}
