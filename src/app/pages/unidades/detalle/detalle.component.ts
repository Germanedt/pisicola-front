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
    deleted_at: ''
  };
  constructor(public router: Router) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }
  public goToListPonds() {
    const state = { 
      productiveUnit: this.productiveUnit
     };
    this.router.navigate(['/listaEstanques'], { state });
  }
  public   goToCreatePond() {
    const state = { 
      productiveUnit: this.productiveUnit
     };
    this.router.navigate(['/agregarEstanque'], { state });
  }
  ngOnInit(): void {}
}
