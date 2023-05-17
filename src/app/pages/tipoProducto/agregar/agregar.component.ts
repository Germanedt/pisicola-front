import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateProductTypeRequest } from 'src/app/models/ProductType.model';
import { ProductTypeService } from 'src/app/services/productType.service';

@Component({
  selector: 'app-agregar-tproducto',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.less'],
})
export class AgregarTipoProductoComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreateProductTypeRequest = {
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value
      };
      this.productTypeService.createProductType(payload).subscribe((response) => {
        if (response) {
          this.router.navigate(['listaTipoProducto']);
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
    private productTypeService: ProductTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
