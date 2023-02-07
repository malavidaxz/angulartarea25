import { Component, OnInit } from '@angular/core';
import { Ferreteria } from 'src/app/interfaces/ferreteria';
import { FerreteriaService } from 'src/app/services/ferreteria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  ferreteria!:Ferreteria[];

  constructor( private ferreteriaService:FerreteriaService ){}

  ngOnInit(): void {

    this.ferreteriaService.getFerreteria().subscribe(Ferreteria => {
      this.ferreteria = Ferreteria
    })
  }

  onClickDelete(ferreteria: Ferreteria) {
    Swal.fire({
        title: '¿Está seguro?',
        text: 'Una vez eliminada, no podrá recuperar el Producto',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result:any) => {
        if (result.value) {
            this.ferreteriaService.deleteFerreteria(ferreteria)
                .then(response => {
                    console.log(response);
                    Swal.fire(
                        'Eliminado!',
                        'El producto ha sido eliminado.',
                        'success'
                    );
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Hubo un problema al eliminar el Producto, por favor intente de nuevo.'
                    });
                });
        }
    });
}
}
