import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProductType } from 'src/app/models/ProductType.model';
import { ProductTypeService } from 'src/app/services/productType.service';

@Component({
  selector: 'app-modificar-tproducto',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarTipoProductoComponent implements OnInit {
  productType: IProductType = {
    id: 0,
    name: '',
    description: '',
    created_at: '',
    deleted_at: '',
    updated_at: ''
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload = {
        id: this.productType.id,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value
      };
      this.productTypeService.modifyProductType(payload).subscribe((response) => {
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
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productType = data['productType'];
      this.form.setValue(
        {
          name: this.productType.name,
          description: this.productType.description
        }
      )
      
    }
  }
  ngOnInit(): void {}
}
