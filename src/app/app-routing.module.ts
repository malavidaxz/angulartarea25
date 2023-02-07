import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', component:RegistroComponent}, //redireccionar al registro Usuario
  {path: 'login', component:LoginComponent}, //redireccionar al Login Usuario
  {path: 'listar', component:ListarComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))}, //redireccionar al Listar Productos
  {path: 'home', component:HomeComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))}, //redireccionar al Registro de Productos
  {path: '**', pathMatch:'full',redirectTo:'login'}//Cualquier url redirija al Login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
