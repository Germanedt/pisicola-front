import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { SessionDataService } from '../services/session-data.service';

@Injectable()
export class CanActivateRole implements CanActivate {
  accessRoutes = [
    { route: 'listaUsuarios', roles: ['admin', 'unit_manager'] },
    { route: 'agregarUsuario', roles: ['admin', 'unit_manager'] },
    { route: 'modificarUsuario', roles: ['admin', 'unit_manager'] },
    { route: 'listaUnidades', roles: ['admin', 'unit_manager'] },
    { route: 'agregarUnidad', roles: ['admin'] },
    { route: 'modificarUnidad', roles: ['admin'] },
    { route: 'detalleUnidad', roles: ['admin', 'unit_manager'] },
    { route: 'listaTipoProducto', roles: ['admin'] },
    { route: 'agregarTipoProducto', roles: ['admin'] },
    { route: 'modificarTipoProducto', roles: ['admin'] },
    { route: 'listaProductos', roles: ['admin', 'unit_manager'] },
    { route: 'agregarProducto', roles: ['admin', 'unit_manager'] },
    { route: 'modificarProducto', roles: ['admin', 'unit_manager'] },
    { route: 'listaEstanques', roles: ['admin', 'unit_manager'] },
    { route: 'agregarEstanque', roles: ['admin', 'unit_manager'] },
    { route: 'modificarEstanque', roles: ['admin', 'unit_manager'] },
    { route: 'agregarParametro', roles: ['admin', 'unit_manager'] },
    { route: 'listaParametros', roles: ['admin', 'unit_manager'] },
    { route: 'modificarParametro', roles: ['admin', 'unit_manager'] },
    { route: 'listaCosechas', roles: ['admin', 'unit_manager']},
    { route: 'agregarCosecha', roles: ['admin', 'unit_manager']},
    { route: 'detallesCosecha', roles: ['admin', 'unit_manager']},
    { route: 'historialCosecha', roles: ['admin', 'unit_manager']},
    { route: 'modificarCosecha', roles: ['admin', 'unit_manager']}
  ];
  constructor(
    private sessionService: SessionDataService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.sessionService.getUserData().id === 0) {
      this.router.navigate(['/login']);
      return false;
    } else {
      const userRole = this.sessionService.getUserData().user_type?.key;
      const routeActive = this.accessRoutes.find((item) => {
        return item.route == route.url[0].path;
      });
      if (!userRole || routeActive?.roles.includes(userRole)) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
