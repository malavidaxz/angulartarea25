import { Component, OnInit } from '@angular/core';
import { FerreteriaService } from 'src/app/services/ferreteria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  public formRegistro !: FormGroup;

  constructor( private ferreteriaServices:FerreteriaService, private router:Router, private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      producto:['',[
        Validators.required,
        Validators.minLength(4)
      ]] ,
      costo:['',[
        Validators.required,
        Validators.pattern(/^[0-9.]+$/) //solo números y punto
      ]] ,
      foto:['',[
        Validators.required,
        Validators.pattern(/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/) //solo url
      ]]
    })
  }

  async onSubmit() {
    this.ferreteriaServices.addProducto(this.formRegistro.value).then( response => {
      console.log(response)
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'El producto ha sido registrado correctamente.'
      });
      this.router.navigate(['/listar']);
    })
    .catch( error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al agregar el producto, por favor intente de nuevo.'
      });
    });
  }
}
