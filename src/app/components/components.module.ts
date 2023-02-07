import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    RegistroProductoComponent,
    ListarProductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    RegistroProductoComponent,
    ListarProductoComponent
  ]
})
export class ComponentsModule { }
