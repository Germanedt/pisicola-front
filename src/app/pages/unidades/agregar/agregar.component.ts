import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProductiveUnitCreateRequest } from 'src/app/models/ProductiveUnit.model';
import { ProductiveUnitService } from 'src/app/services/productiveUnits.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-agregar-unidad',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.less'],
})
export class AgregarUnidadComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: IProductiveUnitCreateRequest = {
        manager_id: this.userData.getUserData().id,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        address: this.form.get('address')?.value,
      };
      this.service.createProductiveUnit(payload).subscribe((response) => {
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
    private userData: SessionDataService,
    private service: ProductiveUnitService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
