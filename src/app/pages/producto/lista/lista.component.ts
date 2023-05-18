import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IListProductRequest, IListProductResponse, IProduct } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-lista-eproducto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaProductoComponent implements OnInit {
  listOfData: IProduct[] = [];

  constructor(
    public router: Router,
    public productService: ProductService
  ) {}

  public goToEdit(product: IProduct) {
    const state = { product };
    this.router.navigate(['/modificarProducto'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.productService.deleteProduct(id).subscribe( (response) => {
      if (response) {
        window.location.reload;
      }
    })
  }

  ngOnInit(): void {
    const params: IListProductRequest = {
      page: 1,
      perPage: 10,
    };
    this.productService
      .listProduct(params)
      .subscribe((response: IListProductResponse) => {
        this.listOfData = response.data;
      });
  }
}
