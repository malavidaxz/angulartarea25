import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ListarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ListarComponent,
    HomeComponent
  ]
})
export class PagesModule { }
