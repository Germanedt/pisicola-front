import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IListSowingRequest, ISowing } from 'src/app/models/Sowing.model';
import { SessionDataService } from 'src/app/services/session-data.service';
import { SowingService } from 'src/app/services/sowing.service';

@Component({
  selector: 'app-detalle-unidad',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.less'],
})
export class DetalleUnidadComponent implements OnInit {
  sowings: ISowing[] = [];
  hasActions = false;
  constructor(
    public router: Router,
    public dataService: SessionDataService,
    public sowingService: SowingService
  ) {}
  public goTo(route: string) {
    this.router.navigate([route]);
  }
  loadDataSowings() {
    const params: IListSowingRequest = {
      page: 0,
      perPage: 0,
    };
    this.sowingService
      .listSowings(params, this.dataService.productiveUnit.id)
      .subscribe((response) => {
        this.sowings = response.data;
      });
  }
  ngOnInit(): void {
    this.loadDataSowings();
  }
}
