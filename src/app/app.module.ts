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
import { ListaUnidadesComponent } from './pages/unidades/lista/lista.component';
import { AgregarUnidadComponent } from './pages/unidades/agregar/agregar.component';
import { ModificarUnidadComponent } from './pages/unidades/modificar/modificar.component';
import { ListaEstanquesComponent } from './pages/estanques/lista/lista.component';
import { AgregarEstanqueComponent } from './pages/estanques/agregar/agregar.component';
import { ModificarEstanqueComponent } from './pages/estanques/modificar/modificar.component';

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
    ListaUnidadesComponent,
    AgregarUnidadComponent,
    ModificarUnidadComponent,
    ListaEstanquesComponent,
    AgregarEstanqueComponent,
    ModificarEstanqueComponent
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
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent],
})
export class AppModule {}
