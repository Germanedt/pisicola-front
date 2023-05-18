import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IModifyProductRequest, IProduct } from 'src/app/models/Product.model';
import { IProductType } from 'src/app/models/ProductType.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ProductService } from 'src/app/services/product.service';
import { ProductTypeService } from 'src/app/services/productType.service';
import { ProductiveUnitService } from 'src/app/services/productiveUnits.service';

@Component({
  selector: 'app-modificar-eproducto',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.less']
})
export class ModificarProductoComponent implements OnInit {
  productTypes: IProductType[] = [];
  productiveUnits: IProductiveUnit[] = [];
  product: IProduct = {
    id: 0,
    name: '',
    description: '',
    created_at: '',
    deleted_at: '',
    updated_at: '',
    fish_id: 0,
    productive_unit_id: 0
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    fish_id: [0, [Validators.required]],
    productive_unit_id: [0, [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: IModifyProductRequest = {
        id: this.product.id,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        fish_id: this.form.get('fish_id')?.value,
        productive_unit_id: this.form.get('productive_unit_id')?.value
      };
      this.productService.modifyProduct(payload).subscribe((response) => {
        if (response) {
          this.router.navigate(['listaProductos']);
        }
      });
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private productTypeService: ProductTypeService,
    private productiveUnitService: ProductiveUnitService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.product = data['product'];
      this.form.setValue(
        {
          name: this.product.name,
          fish_id: this.product.fish_id,
          productive_unit_id: this.product.productive_unit_id,
          description: this.product.description
        }
      )
      
    }
  }

  private loadDataSelect() {
    forkJoin({
      productTypes: this.productTypeService.listProductTypes({
        page: 1,
        perPage: 10,
      }),
      productiveUnits: this.productiveUnitService.listProductiveUnits({
        page: 1,
        perPage: 10,
      }),
    }).subscribe((data) => {
      this.productTypes = data.productTypes.data;
      this.productiveUnits = data.productiveUnits.data;
    });
  }
  ngOnInit(): void {
    this.loadDataSelect();
  }
}
