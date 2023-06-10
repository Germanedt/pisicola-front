import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';

@Component({
  selector: 'app-detalle-unidad',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.less'],
})
export class DetalleUnidadComponent implements OnInit {
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  constructor(public router: Router) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }
  public goToDashboard() {
    this.router.navigate(['/dashboard'], { state: this.getState() });
  }
  public goToListPonds() {
    this.router.navigate(['/listaEstanques'], { state: this.getState() });
  }
  public goToCreatePond() {
    this.router.navigate(['/agregarEstanque'], { state: this.getState() });
  }
  public goToListProducts() {
    this.router.navigate(['/listaProductos'], { state: this.getState() });
  }
  public goToCreateProduct() {
    this.router.navigate(['/agregarProducto'], { state: this.getState() });
  }

  private getState() {
    return {
      productiveUnit: this.productiveUnit,
    };
  }

  ngOnInit(): void {}
}
