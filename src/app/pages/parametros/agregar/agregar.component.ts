import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IListProductRequest, IProduct } from 'src/app/models/Product.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ICreateStatRequest } from 'src/app/models/Stat.model';
import { ProductService } from 'src/app/services/product.service';
import { StatService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-agregar-parametro',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.less'],
})
export class AgregarParametroComponent implements OnInit {
  form: FormGroup = this.fb.group({
    fish_step_id: [null, [Validators.required]],
    key: ['', [Validators.required]],
    name: ['', [Validators.required]],
    value_maximum: [null],
    value_minimum: [null],
    description: ['', [Validators.required]],
  });
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  products: IProduct[] = [];

  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreateStatRequest = {
        fish_step_id: this.form.get('fish_step_id')?.value,
        key: this.form.get('key')?.value,
        name: this.form.get('name')?.value,
        value_minimum: this.form.get('value_minimum')?.value,
        value_maximum: this.form.get('value_maximum')?.value,
        description: this.form.get('description')?.value,
      };
      this.service.createStat(payload).subscribe((response) => {
        if (response) {
          alert('creado');
          console.log(response);
          //this.router.navigate(['listaTipoProducto']);
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
    private service: StatService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  ngOnInit(): void {
    const params: IListProductRequest = {
      page: 1,
      perPage: 10,
      includeDeletes: false,
    };
    this.productService
      .listByProductiveUnitProduct(params, this.productiveUnit.id)
      .subscribe((response) => {
        this.products = response.data
      });
  }
}
