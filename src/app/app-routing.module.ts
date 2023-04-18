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
        path: 'Dashboard',
        component: DashboardComponent
      },
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
        component: ListaTipoProductoComponent
      },
      {
        path: 'agregarTipoProducto',
        component: AgregarTipoProductoComponent
      },
      {
        path: 'modificarTipoProducto',
        component: ModificarTipoProductoComponent
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
