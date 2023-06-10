import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IListPondRequest,
  IListPondResponse,
  IPond,
} from 'src/app/models/Pond.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { PondService } from 'src/app/services/pond.service';

@Component({
  selector: 'app-lista-estanques',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaEstanqueComponent implements OnInit {
  listOfData: IPond[] = [];
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };

  constructor(public router: Router, public pondService: PondService) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  public goToEdit(pond: IPond) {
    const state = { pond: pond, productiveUnit: this.productiveUnit };
    this.router.navigate(['/modificarEstanque'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.pondService.deletePond(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }

  public loadData() {
    const params: IListPondRequest = {
      page: 1,
      perPage: 10,
    };
    this.pondService
      .listPonds(params, this.productiveUnit.id)
      .subscribe((response: IListPondResponse) => {
        this.listOfData = response.data;
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
