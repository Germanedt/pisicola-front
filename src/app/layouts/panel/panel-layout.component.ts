import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IListUsersRequest } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.less'],
})
export class PanelLayoutComponent {
  isCollapsed = false;

  constructor(
    public dataService: SessionDataService,
    private authService: AuthenticationService,
    private router: Router
  ) {}
  public goToListUsersAll() {
    const params: IListUsersRequest = {
      page: 1,
      perPage: 10,
      includeDeletes: true,
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
