import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IListUsersRequest } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionDataService } from 'src/app/services/session-data.service';
import { routeButtons } from './routes-template';
import { INavigationLink } from 'src/app/models/NavigationLink.model';
@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss'],
})
export class PanelLayoutComponent {
  isCollapsed = false;
  isAdmin = false;
  buttonsRoutes: INavigationLink[] = [];
  constructor(
    public dataService: SessionDataService,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.buttonsRoutes = routeButtons.filter((i) =>
      i.roles.includes(dataService.getUserData().user_type?.id || 0)
    );
    this.isAdmin = dataService.getUserData().user_type?.id === 1;
  }
  goTo(route: string) {
    this.router.navigate([route]);
  }
  public goToListUsersAll() {
    const params: IListUsersRequest = {
      page: 1,
      perPage: 10,
      includeDeletes: false,
      includeAdmins: true,
    };
    const state = { params };
    this.router.navigate(['/listaUsuarios'], { state });
  }
  public logout() {
    this.authService.logout().subscribe((response) => {
      this.dataService.setInitValues();
      this.router.navigate(['/']);
    });
  }
}
