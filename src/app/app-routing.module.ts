import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { CatalogoProductoComponent } from './components/catalogo-producto/catalogo-producto.component';
import { LoginComponent } from './components/login/login.component';
import { VerificarPasswordComponent } from './components/verificar-password/verificar-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginInicioComponent } from './components/login-inicio/login-inicio.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { AdministracionComponent } from './components/administracion/administracion.component';



const routes: Routes = [
  
  {path: '', component: CatalogoProductoComponent },
  { path: '', redirectTo: 'catalogo-producto', pathMatch: 'full' },
  {path: 'administracion',component: AdministracionComponent},
  { path: 'list-empleado', component: ListEmpleadoComponent },
  { path: 'create-empleado', component: CreateEmpleadoComponent },
  { path: 'create-cliente', component: CreateClienteComponent },
  { path: 'catalogo-producto', component: CatalogoProductoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-inicio', component: LoginInicioComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerUser', component: RegisterUserComponent},
  { path: 'verificarCorreo', component: VerificarCorreoComponent },
  { path: 'verificar-password', component: VerificarPasswordComponent },
  { path: 'editEmpleado/:id', component: CreateEmpleadoComponent },
  { path: '', redirectTo: 'list-empleado', pathMatch: 'full' },
  { path: '**', redirectTo: 'list-empleado', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ 

}
