import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IListProductRequest,
  IListProductResponse,
  IProduct,
} from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-lista-eproducto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaProductoComponent implements OnInit {
  listOfData: IProduct[] = [];
  isAdmin: boolean = true;

  constructor(
    public router: Router,
    public productService: ProductService,
    public dataService: SessionDataService
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (dataService.productiveUnit.id !== 0) {
      this.isAdmin = dataService.getUserData().user_type_id === 1;
    }
  }

  public goToEdit(product: IProduct) {
    const state = { product: product, isAdmin: this.isAdmin };
    this.router.navigate(['/modificarProducto'], { state });
  }

  public goToListStats(product: IProduct) {
    const state = { product: product };
    this.router.navigate(['/listaParametros'], { state });
  }
  public handlerConfirmDelete(id: number) {
    this.productService.deleteProduct(id).subscribe((response) => {
      if (response) {
        window.location.reload;
      }
    });
  }

  ngOnInit(): void {}

  ionViewWillEnter():void {
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
        .listByProductiveUnitProduct(params, this.dataService.productiveUnit.id)
        .subscribe((response: IListProductResponse) => {
          this.listOfData = response.data;
        });
    }
  }
}
