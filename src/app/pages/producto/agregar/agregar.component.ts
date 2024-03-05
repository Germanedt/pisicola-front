import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ICreateProductRequest } from 'src/app/models/Product.model';
import { IProductType } from 'src/app/models/ProductType.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ProductService } from 'src/app/services/product.service';
import { ProductTypeService } from 'src/app/services/productType.service';
import { ProductiveUnitService } from 'src/app/services/productiveUnits.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-agregar-eproducto',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarProductoComponent implements OnInit {
  productTypes: IProductType[] = [];
  productiveUnits: IProductiveUnit[] = [];
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    fish_id: [0, [Validators.required]],
    productive_unit_id: [0, [Validators.required]],
    description: ['', [Validators.required]],
  });
  isAdmin: boolean = true;
  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreateProductRequest = {
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        fish_id: this.form.get('fish_id')?.value,
        productive_unit_id: this.form.get('productive_unit_id')?.value,
      };
      this.productService.createProduct(payload).subscribe((response) => {
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
    private dataService: SessionDataService,
    private router: Router
  ) {
    if (this.dataService.productiveUnit.id !== 0) {
      this.isAdmin = false;
      this.form.setValue({
        name: '',
        fish_id: 0,
        productive_unit_id: this.dataService.productiveUnit.id,
        description: '',
      });
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
