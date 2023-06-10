import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product.model';
import { IListStatsRequest, IListStatsResponse, IStat } from 'src/app/models/Stat.model';
import { StatService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-lista-tproducto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaParametrosComponent implements OnInit {
  listOfData: IStat[] = [];
  product: IProduct = {
    id: 0,
    name: '',
    description: '',
    created_at: '',
    deleted_at: '',
    updated_at: '',
    fish_id: 0,
    productive_unit_id: 0
  }
  constructor(
    public router: Router,
    public service: StatService
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.product = data['product'];
    }
  }

  public goToEdit(stat: IStat) {
    const state = { stat: stat, productiveUnit: this.product.productive_unit_id };
    this.router.navigate(['/modificarParametro'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.service.deleteStat(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }
  public loadData() {
    const params: IListStatsRequest = {
      page: 1,
      perPage: 10,
    };
    this.service
      .listStats(params, this.product.id)
      .subscribe((response: IListStatsResponse) => {
        this.listOfData = response.data;
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
