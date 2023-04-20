import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.less']
})
export class PanelLayoutComponent {
  isCollapsed = false;

  constructor(
    public dataService: SessionDataService,
    private authService: AuthenticationService,
    private router: Router
  ) {
  }
  public logout(){
    this.authService.logout().subscribe((response) => {
      this.dataService.setInitValues();
      this.router.navigate(['/']);
    });
  }
}