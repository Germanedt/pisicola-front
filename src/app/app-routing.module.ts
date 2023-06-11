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
import { ListaEstanqueComponent } from './pages/estanques/lista/lista.component';
import { AgregarEstanqueComponent } from './pages/estanques/agregar/agregar.component';
import { ModificarEstanqueComponent } from './pages/estanques/modificar/modificar.component';
import { AgregarTipoProductoComponent } from './pages/tipoProducto/agregar/agregar.component';
import { ModificarTipoProductoComponent } from './pages/tipoProducto/modificar/modificar.component';
import { ListaTipoProductoComponent } from './pages/tipoProducto/lista/lista.component';
import { AgregarAlimentoComponent } from './pages/alimentos/agregar/agregar.component';
import { ListaAlimentosComponent } from './pages/alimentos/lista/lista.component';
import { AgregarMedicamentoComponent } from './pages/medicamentos/agregar/agregar.component';
import { ListaMedicamentosComponent } from './pages/medicamentos/lista/lista.component';
import { AgregarInsumoComponent } from './pages/insumos/agregar/agregar.component';
import { ListaInsumosComponent } from './pages/insumos/lista/lista.component';
import { AgregarEquipoComponent } from './pages/equipos/agregar/agregar.component';
import { ListaEquiposComponent } from './pages/equipos/lista/lista.component';
import { ListaGastosComponent } from './pages/gastos/lista/lista.component';
import { AgregarGastoComponent } from './pages/gastos/agregar/agregar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetallesCosechaComponent } from './pages/cosechas/detalles/detalles.component';
import { HistorialCosechaComponent } from './pages/cosechas/historial/historial.component';
import { ListaProductoComponent } from './pages/producto/lista/lista.component';
import { AgregarProductoComponent } from './pages/producto/agregar/agregar.component';
import { ModificarProductoComponent } from './pages/producto/modificar/modificar.component';
import { DetalleUnidadComponent } from './pages/unidades/detalle/detalle.component';
import { AgregarParametroComponent } from './pages/parametros/agregar/agregar.component';
import { ListaParametrosComponent } from './pages/parametros/lista/lista.component';
import { ModificarParametroComponent } from './pages/parametros/modificar/modificar.component';
import { CanActivateRole } from './guard/accessControl.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'recuperar',
        component: RecuperarClaveComponent,
      },
    ],
  },
  {
    path: '',
    component: PanelLayoutComponent,
    children: [
      {
        path: 'listaUsuarios',
        component: ListaUsuariosComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarUsuario',
        component: AgregarUsuarioComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarUsuario',
        component: ModificarUsuarioComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaUnidades',
        component: ListaUnidadesComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarUnidad',
        component: AgregarUnidadComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarUnidad',
        component: ModificarUnidadComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'detalleUnidad',
        component: DetalleUnidadComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaTipoProducto',
        component: ListaTipoProductoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarTipoProducto',
        component: AgregarTipoProductoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarTipoProducto',
        component: ModificarTipoProductoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaProductos',
        component: ListaProductoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarProducto',
        component: AgregarProductoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarProducto',
        component: ModificarProductoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaEstanques',
        component: ListaEstanqueComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarEstanque',
        component: AgregarEstanqueComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarEstanque',
        component: ModificarEstanqueComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarParametro',
        component: AgregarParametroComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaParametros',
        component: ListaParametrosComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarParametro',
        component: ModificarParametroComponent,
        canActivate: [CanActivateRole],
      },
      //Pendientes
      /*{
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'agregarAlimento',
        component: AgregarAlimentoComponent
      },
      {
        path: 'listaAlimento',
        component: ListaAlimentosComponent
      },
      {
        path: 'agregarMedicamento',
        component: AgregarMedicamentoComponent
      },
      {
        path: 'listaMedicamentos',
        component: ListaMedicamentosComponent
      },
      {
        path: 'agregarInsumo',
        component: AgregarInsumoComponent
      },
      {
        path: 'listaInsumos',
        component: ListaInsumosComponent
      },
      {
        path: 'agregarEquipo',
        component: AgregarEquipoComponent
      },
      {
        path: 'listaEquipos',
        component: ListaEquiposComponent
      },
      {
        path: 'listaGastos',
        component: ListaGastosComponent
      },
      {
        path: 'agregarGasto',
        component: AgregarGastoComponent
      },
      {
        path: 'detallesCosecha',
        component: DetallesCosechaComponent
      },
      {
        path: 'historialCosecha',
        component: HistorialCosechaComponent
      },*/
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
