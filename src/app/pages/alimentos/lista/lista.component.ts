import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { IFood, IListFoodRequest, IListFoodResponse } from 'src/app/models/Food.model';
import { ISowing } from 'src/app/models/Sowing.model';
import { FoodService } from 'src/app/services/Food.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaAlimentosComponent implements OnInit{
  listOfData: IFood[];
  sowing: ISowing = {
    id: 0,
    user_id_created: 0,
    pond_id: 0,
    fish_step_id: 0,
    total_fish: 0,
    closed_at: '',
    created_at: '',
    updated_at: '',
    deleted_at: '',
    pond: undefined,
    fish_step: undefined,
  };

  constructor(public service: FoodService, public router: Router) {
    this.listOfData = [];
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.sowing = data['sowing'];
    }

  }
  public loadData(){
    const params: IListFoodRequest = {
      page: 0,
      perPage: 0
    };
    this.service.listFoods(params, this.sowing.id).subscribe((response: IListFoodResponse) => {
      this.listOfData = response.data;
    });
  }

  formatFullDate(dateString:string) {
    return moment(dateString).format(
      'YYYY-MM-DD hh:mm a'
    )
  }
  ngOnInit(): void {
    this.loadData();
  }
}
