import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreatePondRequest } from 'src/app/models/Pond.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { PondService } from 'src/app/services/pond.service';

@Component({
  selector: 'app-agregar-estanques',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.less'],
})
export class AgregarEstanqueComponent implements OnInit {
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: ''
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    sensor_id: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreatePondRequest = {
        productive_unit_id: this.productiveUnit.id,
        name: this.form.get('name')?.value,
        sensor_id: this.form.get('sensor_id')?.value,
        description: this.form.get('description')?.value
      };
      this.pondService.createPond(payload).subscribe((response) => {
        if (response) {
          const state = { 
            productiveUnit: this.productiveUnit
           };
          this.router.navigate(['/listaEstanques'], { state });
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
    private pondService: PondService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  ngOnInit(): void {}
}
