import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IListProductTypeRequest,
  IListProductTypeResponse,
  IProductType,
} from 'src/app/models/ProductType.model';
import { ProductTypeService } from 'src/app/services/productType.service';

@Component({
  selector: 'app-lista-tproducto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaTipoProductoComponent implements OnInit {
  listOfData: IProductType[] = [];

  constructor(
    public router: Router,
    public productTypeService: ProductTypeService
  ) {}

  public goToEdit(productType: IProductType) {
    const state = { productType };
    this.router.navigate(['/modificarTipoProducto'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.productTypeService.deleteProductType(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }
  public loadData() {
    const params: IListProductTypeRequest = {
      page: 1,
      perPage: 10,
    };
    this.productTypeService
      .listProductTypes(params)
      .subscribe((response: IListProductTypeResponse) => {
        this.listOfData = response.data;
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
