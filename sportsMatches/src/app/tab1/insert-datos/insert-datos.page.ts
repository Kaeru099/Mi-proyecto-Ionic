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

  @Input() parques!: Partial<any>
  isUpdatep:boolean = false

  constructor(private modalCtrl: ModalController,
              private conexion:ConexionService) { }

  ngOnInit() {
  this.updateDatos();
  this.updateParques();
}


  form = new FormGroup({
    nombre_sitio: new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ]),
    horario_sitio: new FormControl('', [
      Validators.minLength(4),
      Validators.required
    ]),
    num_informacion: new FormControl('', [
      Validators.required
    ]),
    direccion_sitio: new FormControl('', [
      Validators.minLength(5),
      Validators.required
    ]),
    barrio_sitio: new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ]),
    imagen_sitio: new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ])
  })

  onSubmit = () => {
    if(this.isUpdate){
      const dat = {
        id_sitio: parseInt(this.datos['id_sitio']),
        nombre_sitio: this.form.value.nombre_sitio,
        horario_sitio: this.form.value.horario_sitio,
        num_informacion: this.form.value.num_informacion,
        direccion_sitio: this.form.value.direccion_sitio,
        barrio_sitio: this.form.value.barrio_sitio,
        imagen_sitio: this.form.value.imagen_sitio
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
      const datp = {
        id_parque: parseInt(this.parques['id_parque']),
        nombre_parque: this.formp.value.nombre_parque,
        direccion_parque: this.formp.value.direccion_parque,
        barrio_parque: this.formp.value.barrio_parque,
        deportes_parque: this.formp.value.deportes_parque,
        foto_parque: this.formp.value.foto_parque
      }
      this.conexion.updateParques(datp).subscribe(
        datap => {
          console.log('Registro actualizado')
          this.closeModal()
        }, error => {
          console.log('No se pudo actualizar')
        }
        )
    }else{
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
  }

  async closeModal(){
    this.modalCtrl.dismiss(null, 'closed')
  }

  updateDatos(){
    if(this.datos){
      this.isUpdate = true
      this.form.patchValue(
        {
          nombre_sitio: this.datos['nombre_sitio'],
          horario_sitio: this.datos['horario_sitio'],
          num_informacion: this.datos['num_informacion'],
          direccion_sitio: this.datos['direccion_sitio'],
          barrio_sitio: this.datos['barrio_sitio'],
          imagen_sitio: this.datos['imagen_sitio']
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
