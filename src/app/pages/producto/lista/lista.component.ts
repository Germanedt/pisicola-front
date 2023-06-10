import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IListProductRequest,
  IListProductResponse,
  IProduct,
} from 'src/app/models/Product.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-lista-eproducto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaProductoComponent implements OnInit {
  listOfData: IProduct[] = [];
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  isAdmin: boolean = true;

  constructor(public router: Router, public productService: ProductService) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
      this.isAdmin = false;
    }
  }

  public goToEdit(product: IProduct) {
    const state = { product: product, isAdmin: this.isAdmin };
    this.router.navigate(['/modificarProducto'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.productService.deleteProduct(id).subscribe((response) => {
      if (response) {
        window.location.reload;
      }
    });
  }

  ngOnInit(): void {
    const params: IListProductRequest = {
      page: 1,
      perPage: 10,
    };
    if (this.isAdmin) {
      this.productService
        .listAllProduct(params)
        .subscribe((response: IListProductResponse) => {
          this.listOfData = response.data;
        });
    } else {
      this.productService
        .listByProductiveUnitProduct(params, this.productiveUnit.id)
        .subscribe((response: IListProductResponse) => {
          this.listOfData = response.data;
        });
    }
  }
}
