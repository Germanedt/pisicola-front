import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import {
  IListSowingRequest,
  IListSowingResponse,
  ISowing,
} from 'src/app/models/Sowing.model';
import { SowingService } from 'src/app/services/sowing.service';

@Component({
  selector: 'app-lista-cosechas',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaCosechaComponent {
  listOfData: ISowing[] = [];
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };

  constructor(public router: Router, public service: SowingService) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  public loadData() {
    const params: IListSowingRequest = {
      page: 1,
      perPage: 10,
      includeClosed: false,
    };
    this.service
      .listSowings(params, this.productiveUnit.id)
      .subscribe((response: IListSowingResponse) => {
        this.listOfData = response.data;
      });
  }
  public handlerConfirmDelete(id: number) {
    this.service.deleteSowing(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }
  public gotTo(sowing: ISowing) {
    const state = { sowing };
    this.router.navigate(['/detallesCosecha'], { state });
  }
  public goToEdit(sowing: ISowing) {
    const state = {
      productiveUnit: this.productiveUnit,
      sowing,
    };
    this.router.navigate(['/modificarCosecha'], { state });
  }
  public handlerConfirmClose(sowingId: number) {
    this.service.closeSowing(sowingId).subscribe((response) => {
      if (response) {
        console.log(response);
        this.loadData();
      }
    });
  }
  ngOnInit(): void {
    this.loadData();
  }
  public getJSON(item: ISowing) {
    return JSON.stringify(item, null, 2);
  }
}
