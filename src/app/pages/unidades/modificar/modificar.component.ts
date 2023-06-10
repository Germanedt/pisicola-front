import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IProductiveUnit, IProductiveUnitModifyRequest } from 'src/app/models/ProductiveUnit.model';
import { ProductiveUnitService } from 'src/app/services/productiveUnits.service';

@Component({
  selector: 'app-modificar-unidad',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.less'],
})
export class ModificarUnidadComponent implements OnInit {
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: IProductiveUnitModifyRequest = {
        id: this.productiveUnit.id,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        address: this.form.get('address')?.value
      };
      this.service.modifyProductiveUnit(payload).subscribe((response) => {
        if (response) {
          this.router.navigate(['listaUnidades']);
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
    private router: Router,
    private service: ProductiveUnitService
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
      this.form.setValue(
        {
          name: this.productiveUnit.name,
          address: this.productiveUnit.address,
          description: this.productiveUnit.description
        }
      )
    }
  }

  ngOnInit(): void {}
}
