import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { PanelLayoutComponent } from './layouts/panel/panel-layout.component';
import { AgregarUsuarioComponent } from './pages/usuarios/agregar/agregar.component';
import { ListaUsuariosComponent } from './pages/usuarios/lista/lista.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { RecuperarClaveComponent } from './pages/usuarios/recuperar-clave/recuperar-clave.component';
import { ModificarUsuarioComponent } from './pages/usuarios/modificar/modificar.component';
import { ListaUnidadesComponent } from './pages/unidades/lista/lista.component';
import { AgregarUnidadComponent } from './pages/unidades/agregar/agregar.component';
import { ModificarUnidadComponent } from './pages/unidades/modificar/modificar.component';
import { ListaEstanquesComponent } from './pages/estanques/lista/lista.component';
import { AgregarEstanqueComponent } from './pages/estanques/agregar/agregar.component';
import { ModificarEstanqueComponent } from './pages/estanques/modificar/modificar.component';
import { AgregarTipoProductoComponent } from './pages/tipoProducto/agregar/agregar.component';
import { ModificarTipoProductoComponent } from './pages/tipoProducto/modificar/modificar.component';

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
    path: '',
    component: PanelLayoutComponent,
    children: [
      {
        path: 'listaUsuarios',
        component: ListaUsuariosComponent
      },
      {
        path: 'agregarUsuario',
        component: AgregarUsuarioComponent
      },
      {
        path: 'modificarUsuario',
        component: ModificarUsuarioComponent
      },
      {
        path: 'listaUnidades',
        component: ListaUnidadesComponent
      },
      {
        path: 'agregarUnidad',
        component: AgregarUnidadComponent
      },
      {
        path: 'modificarUnidad',
        component: ModificarUnidadComponent
      },
      {
        path: 'listaEstanques',
        component: ListaEstanquesComponent
      },
      {
        path: 'agregarEstanque',
        component: AgregarEstanqueComponent
      },
      {
        path: 'modificarEstanque',
        component: ModificarEstanqueComponent
      },
      {
        path: 'listaTipoProducto',
        component: ListaEstanquesComponent
      },
      {
        path: 'agregarTipoProducto',
        component: AgregarTipoProductoComponent
      },
      {
        path: 'modificarTipoProducto',
        component: ModificarTipoProductoComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
