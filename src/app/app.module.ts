import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Ant-Design modules
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
//Componentes y modulos propios
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ListaTipoProductoComponent } from './pages/tipoProducto/lista/lista.component';
import { ModificarTipoProductoComponent } from './pages/tipoProducto/modificar/modificar.component';
import { AgregarAlimentoComponent } from './pages/alimentos/agregar/agregar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
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
import { DetallesCosechaComponent } from './pages/cosechas/detalles/detalles.component';
import { HistorialCosechaComponent } from './pages/cosechas/historial/historial.component';
import { SessionDataService } from './services/session-data.service';
import { ModificarProductoComponent } from './pages/producto/modificar/modificar.component';
import { AgregarProductoComponent } from './pages/producto/agregar/agregar.component';
import { ListaProductoComponent } from './pages/producto/lista/lista.component';
import { DetalleUnidadComponent } from './pages/unidades/detalle/detalle.component';
import { AgregarParametroComponent } from './pages/parametros/agregar/agregar.component';
import { ListaParametrosComponent } from './pages/parametros/lista/lista.component';
import { ModificarParametroComponent } from './pages/parametros/modificar/modificar.component';
import { CanActivateRole } from './guard/accessControl.guard';
import { ListaCosechaComponent } from './pages/cosechas/lista/lista.component';
import { AgregarCosechaComponent } from './pages/cosechas/agregar/agregar.component';
import { ModificarCosechaComponent } from './pages/cosechas/modificar/modificar.component';
import { SensorChartComponent } from './components/sensorChart/sensor-chart.component';
import { HistoryChartComponent } from './components/historyChart/history-chart.component';
import { ListaEmpleadosComponent } from './pages/empleados/lista/lista.component';
import { AgregarEmpleadoComponent } from './pages/empleados/agregar/agregar.component';
import { ModificarEmpleadoComponent } from './pages/empleados/modificar/modificar.component';
import { ListaTareasComponent } from './pages/tareas/lista/lista.component';
import { AgregarTareaComponent } from './pages/tareas/agregar/agregar.component';
import { ModificarTareaComponent } from './pages/tareas/modificar/modificar.component';
import { ListaRegistroTareasComponent } from './pages/registroTareas/lista/lista.component';
import { AgregarRegistroTareaComponent } from './pages/registroTareas/agregar/agregar.component';
import { ModificarRegistroTareaComponent } from './pages/registroTareas/modificar/modificar.component';
import { ListaConceptosPagoComponent } from './pages/conceptoPago/lista/lista.component';
import { AgregarConceptoPagoComponent } from './pages/conceptoPago/agregar/agregar.component';
import { ModificarConceptoPagoComponent } from './pages/conceptoPago/modificar/modificar.component';
import { SowingCardComponent } from './components/sowingCard/sowing-card.component';
import { IonicModule } from '@ionic/angular';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    LoginComponent,
    RecuperarClaveComponent,
    PanelLayoutComponent,
    ListaUsuariosComponent,
    AgregarUsuarioComponent,
    ModificarUsuarioComponent,
    CambiarClaveUsuarioComponent,
    ListaUnidadesComponent,
    AgregarUnidadComponent,
    ModificarUnidadComponent,
    DetalleUnidadComponent,
    ListaEstanqueComponent,
    AgregarEstanqueComponent,
    ModificarEstanqueComponent,
    ListaTipoProductoComponent,
    AgregarTipoProductoComponent,
    ModificarTipoProductoComponent,
    ListaProductoComponent,
    AgregarProductoComponent,
    ModificarProductoComponent,
    AgregarAlimentoComponent,
    DashboardComponent,
    ListaAlimentosComponent,
    AgregarMedicamentoComponent,
    ListaMedicamentosComponent,
    AgregarInsumoComponent,
    ListaInsumosComponent,
    AgregarEquipoComponent,
    ListaEquiposComponent,
    ListaGastosComponent,
    AgregarGastoComponent,
    ModificarGastoComponent,
    DetallesCosechaComponent,
    AgregarParametroComponent,
    ListaParametrosComponent,
    ModificarParametroComponent,
    ListaCosechaComponent,
    AgregarCosechaComponent,
    ModificarCosechaComponent,
    SensorChartComponent,
    HistoryChartComponent,
    SowingCardComponent,
    HistorialCosechaComponent,
    ListaEmpleadosComponent,
    AgregarEmpleadoComponent,
    ModificarEmpleadoComponent,
    ListaTareasComponent,
    AgregarTareaComponent,
    ModificarTareaComponent,
    ListaRegistroTareasComponent,
    AgregarRegistroTareaComponent,
    ModificarRegistroTareaComponent,
    ListaConceptosPagoComponent,
    AgregarConceptoPagoComponent,
    ModificarConceptoPagoComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzSelectModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzModalModule,
    NzTabsModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzSwitchModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
  ],
  providers: [
    CanActivateRole,
    { provide: NZ_I18N, useValue: es_ES },
    SessionDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
