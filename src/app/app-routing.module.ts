import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { PanelLayoutComponent } from './layouts/panel/panel-layout.component';
import { AgregarUsuarioComponent } from './pages/usuarios/agregar/agregar.component';
import { ListaUsuariosComponent } from './pages/usuarios/lista/lista.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { RecuperarClaveComponent } from './pages/usuarios/recuperar-clave/recuperar-clave.component';
import { ModificarUsuarioComponent } from './pages/usuarios/modificar/modificar.component';
import { CambiarClaveUsuarioComponent } from './pages/usuarios/cambiar-clave/cambiar-clave.component';
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
import { ModificarGastoComponent } from './pages/gastos/modificar/modificar.component';
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
import { ListaCosechaComponent } from './pages/cosechas/lista/lista.component';
import { AgregarCosechaComponent } from './pages/cosechas/agregar/agregar.component';
import { ModificarCosechaComponent } from './pages/cosechas/modificar/modificar.component';
import { ListaEmpleadosComponent } from './pages/empleados/lista/lista.component';
import { AgregarEmpleadoComponent } from './pages/empleados/agregar/agregar.component';
import { ListaTareasComponent } from './pages/tareas/lista/lista.component';
import { AgregarTareaComponent } from './pages/tareas/agregar/agregar.component';
import { ModificarTareaComponent } from './pages/tareas/modificar/modificar.component';
import { ListaRegistroTareasComponent } from './pages/registroTareas/lista/lista.component';
import { AgregarRegistroTareaComponent } from './pages/registroTareas/agregar/agregar.component';
import { ModificarEmpleadoComponent } from './pages/empleados/modificar/modificar.component';
import { ModificarRegistroTareaComponent } from './pages/registroTareas/modificar/modificar.component';
import { ListaConceptosPagoComponent } from './pages/conceptoPago/lista/lista.component';
import { AgregarConceptoPagoComponent } from './pages/conceptoPago/agregar/agregar.component';
import { ModificarConceptoPagoComponent } from './pages/conceptoPago/modificar/modificar.component';

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
        path: 'cambiarClaveUsuario',
        component: CambiarClaveUsuarioComponent,
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
      {
        path: 'listaCosechas',
        component: ListaCosechaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarCosecha',
        component: AgregarCosechaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarCosecha',
        component: ModificarCosechaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'detallesCosecha',
        component: DetallesCosechaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'historialCosecha',
        component: HistorialCosechaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaEmpleados',
        component: ListaEmpleadosComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarEmpleado',
        component: AgregarEmpleadoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaTareas',
        component: ListaTareasComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarEmpleado',
        component: ModificarEmpleadoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarTarea',
        component: AgregarTareaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarTarea',
        component: ModificarTareaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaRegistroTareas',
        component: ListaRegistroTareasComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarRegistroTarea',
        component: AgregarRegistroTareaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarRegistroTarea',
        component: ModificarRegistroTareaComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaConceptosPago',
        component: ListaConceptosPagoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarConceptoPago',
        component: AgregarConceptoPagoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarConceptoPago',
        component: ModificarConceptoPagoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaGastos',
        component: ListaGastosComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'agregarGasto',
        component: AgregarGastoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'modificarGasto',
        component: ModificarGastoComponent,
        canActivate: [CanActivateRole],
      },
      {
        path: 'listaAlimentos',
        component: ListaAlimentosComponent,
        canActivate: [CanActivateRole]
      },
      {
        path: 'listaSuministros',
        component: ListaInsumosComponent,
        canActivate: [CanActivateRole]
      }
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
