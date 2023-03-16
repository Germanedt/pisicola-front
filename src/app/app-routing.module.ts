import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { PanelLayoutComponent } from './layouts/panel/panel-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarClaveComponent } from './pages/recuperar-clave/recuperar-clave.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { AgregarUsuarioComponent } from './pages/agregar-usuario/agregar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'recuperar',
        component: RecuperarClaveComponent
      }
    ]
  },
  {
    path: 'panel',
    component: PanelLayoutComponent,
    children: [
      {
        path: 'listaUsuarios',
        component: ListaUsuariosComponent
      },
      {
        path: 'agregarUsuario',
        component: AgregarUsuarioComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
