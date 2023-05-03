import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IListProductiveUnitRequest, IListProductiveUnitResponse, IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ProductiveUnitService } from 'src/app/services/productiveUnits.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-lista-unidades',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaUnidadesComponent implements OnInit{
  listOfData: IProductiveUnit[] = [];
  constructor(
    public dataService: SessionDataService,
    private service: ProductiveUnitService,
    private router: Router
  ){
  }
  public handlerConfirmDelete(userId: number){
    this.service.deleteProductiveUnit(userId).subscribe((response: any) =>{
      if (response) {
        window.location.reload;
      }
    });
  }
  ngOnInit(): void {
    const params: IListProductiveUnitRequest = {
      page: 1,
      perPage: 10,
      includeDeletes: true
    }
    this.service.listProductiveUnits(params).subscribe((response: IListProductiveUnitResponse) =>{
      this.listOfData = response.data;
    });
    
  }
}
