import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ConexionService } from 'src/app/services/conexion.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-insert-datos',
  templateUrl: './insert-datos.page.html',
  styleUrls: ['./insert-datos.page.scss'],
})
export class InsertDatosPage implements OnInit {
  public alertButtons = ['Siguiente'];
  public alertInputs = [
    {
      label: 'Parque',
      type: 'radio',
      value: 'parque',
      checked: true
    },
    {
      label: 'Sitio',
      type: 'radio',
      value: 'sitio',
    }
  ];

  @Input() datos!: Partial<any>
  isUpdate:boolean = false

  @Input() parques!: Partial<any>
  isUpdatep:boolean = false

  constructor(private modalCtrl: ModalController,
              private conexion:ConexionService) { }

  ngOnInit() {
  this.updateDatos();
  this.updateParques();
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
    if(this.isUpdatep){
      const dat = {
        id_parque: parseInt(this.parques['id_parque']),
        nombre_parque: this.formp.value.nombre_parque,
        direccion_parque: this.formp.value.direccion_parque,
        barrio_parque: this.formp.value.barrio_parque,
        deportes_parque: this.formp.value.deportes_parque,
        foto_parque: this.formp.value.foto_parque
      }
      this.conexion.updateParques(dat).subscribe(
        data => {
          console.log('Registro actualizado')
          this.closeModal()
        }, error => {
          console.log('No se pudo actualizar')
        }
        )
    }else{
      const dat = this.formp.value
      this.conexion.insertParques(dat).subscribe(
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

  updateParques(){
    if(this.parques){
      this.isUpdatep = true
      this.formp.patchValue(
        {
          nombre_parque: this.parques['nombre_parque'],
          direccion_parque: this.parques['direccion_parque'],
          barrio_parque: this.parques['barrio_parque'],
          deportes_parque: this.parques['deportes_parque'],
          foto_parque: this.parques['foto_parque']
        }
      )
    }
  }

}
